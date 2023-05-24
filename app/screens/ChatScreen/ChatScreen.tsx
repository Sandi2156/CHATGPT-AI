import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import uuid from "react-native-uuid";
import { useInterstitialAd, TestIds } from "react-native-google-mobile-ads";

import ChatItem from "./components/ChatItem";
import ChatBox from "../../components/ChatBox";
import DropDownPicker from "../../components/DropDownPicker";

import colors from "../../constants/colors";
import SectionType from "../../enums/sections";
import chatApi from "../../api/chat";

import languages from "../../data/languages";
import Icon from "../../components/Icon";
import IconType from "../../enums/icons";

import calculatorQuestions from "../../data/calculatorQuestionList";

type Messagetype = {
	_id: string;
	user: {
		_id: number;
		content: string;
	};
};
type GptMessagetype = { role: string; content: string };
type PropsType = { navigation: any; route: any };
export default function ChatScreen({ navigation, route }: PropsType) {
	const params = route.params;
	const question = params?.question;
	const section = params?.section;
	const ingredients = params?.ingredients;
	const filters = params?.filters;

	const [noOfCalculatorQuestions, setNoOfCalculatorQuestions] = useState(1);
	const { load, show, isLoaded } = useInterstitialAd(
		__DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-6209939265474141/5259824017",
		{
			requestNonPersonalizedAdsOnly: true,
		}
	);
	const [hasTypedSomething, setHasTypedSomething] = useState(false);

	const selectInitialInputText = () => {
		switch (section) {
			case SectionType.COOKING_DISH_GENERATOR:
				return ingredients.join(", ");
			default:
				return "";
		}
	};

	const getFirstMessage: () => Array<Messagetype> = () => {
		const message = {
			_id: `${uuid.v4()}`,
			user: {
				_id: 2,
				content: "",
			},
		};

		switch (section) {
			case SectionType.LANGUAGE_CONVERTER:
				message.user.content = "Select From -> To ☝🏻";
				break;
			case SectionType.LANGUAGE_COVER_LETTER:
				message.user.content = "Paste your CV details";
				break;
			case SectionType.LANGUAGE_SUMMARIZE:
				message.user.content =
					"Please provide me with the topic that you would like me to summarize.";
				break;
			case SectionType.LANGUAGE_ESSAY:
				message.user.content = "What is the topic of your essay?";
				break;
			case SectionType.LANGUAGE_REPHRASE:
				message.user.content =
					"provide me the sentence or passage that you want me to rephrase";
				break;
			case SectionType.LANGUAGE_GRAMMARLY:
				message.user.content =
					"Give me a sentence or para, I will find mistakes if any and will give you different ways to write it";
				break;
			case SectionType.CODING_DSA:
				message.user.content = "Paste your question down below.";
				break;
			case SectionType.CODING_ERROR_FINDER:
				message.user.content =
					"Provide me the code that you want me to find error from";
				break;
			case SectionType.CODING_CODE_OPTIMIZATION:
				message.user.content =
					"Paste the code that you want to optimize down below";
				break;
			case SectionType.CODING_WEBSITE_TEMPLATE:
				message.user.content = "Provide the requirements of your website";
				break;
			case SectionType.COOKING_RECIPE:
				message.user.content = "Write the name of the dish !";
				break;
			case SectionType.COOKING_DISH_GENERATOR:
				message.user.content = "Feel free add extra ingredients if you want !";
				break;
			case SectionType.SQL_QUERY:
				message.user.content = "Provide your query !";
				break;
			case SectionType.SQL_ERROR_FINDER:
				message.user.content =
					"Paste the question and respective query that you want me to find error from !";
				break;
			case SectionType.HEALTH_DISEASE:
				message.user.content = "Name any Disease !";
				break;
			case SectionType.HEALTH_CALCULATORS_BMI:
				message.user.content =
					calculatorQuestions[SectionType.HEALTH_CALCULATORS_BMI][0];
				break;
			case SectionType.HEALTH_CALCULATORS_BMR:
				message.user.content =
					calculatorQuestions[SectionType.HEALTH_CALCULATORS_BMR][0];
				break;
			case SectionType.HEALTH_CALCULATORS_CALORIE_MICRONUTRIENT:
				message.user.content =
					calculatorQuestions[
						SectionType.HEALTH_CALCULATORS_CALORIE_MICRONUTRIENT
					][0];
				break;
			case SectionType.FUN_GAMING_EMOJI_GUESSER:
				message.user.content = "Let's Play 😎😎";
				break;
			case SectionType.FUN_GAMING_GUESS_WHO:
				message.user.content = "Let's Play 😎😎";
				break;
			default:
				message.user.content = "Hi, How can I assist you today !";
				break;
		}
		return [message];
	};

	const [messages, setMessages] = useState<Array<Messagetype>>(
		getFirstMessage()
	);
	const [gptMessages, setGptMessages] = useState<Array<GptMessagetype>>([]);
	const [text, setText] = useState(selectInitialInputText());
	const [fromLanguage, setFromLanguage] = useState<string>("Hindi");
	const [toLanguage, setToLanguage] = useState<string>("English");
	const [dsaLanguage, setDsaLanguage] = useState<string>("Java");
	const [isSending, setIsSending] = useState(false);

	const continueChat = async (text: string) => {
		const isLastQuestion =
			calculatorQuestions[section as keyof typeof calculatorQuestions]
				.length === noOfCalculatorQuestions;

		if (isLastQuestion) {
			await sendMessage(text);
			setMessages((messages) => [
				{
					_id: `${uuid.v4()}`,
					user: {
						_id: 2,
						content: `Let's try again. ${
							calculatorQuestions[
								section as keyof typeof calculatorQuestions
							][0]
						}`,
					},
				},
				...messages,
			]);
			setGptMessages((gptMessages) => [
				...gptMessages,
				{
					role: "assistant",
					content:
						calculatorQuestions[section as keyof typeof calculatorQuestions][0],
				},
			]);
			setNoOfCalculatorQuestions(1);
			return;
		}

		const question =
			calculatorQuestions[section as keyof typeof calculatorQuestions][
				noOfCalculatorQuestions
			];

		setMessages((messages) => [
			{
				_id: `${uuid.v4()}`,
				user: {
					_id: 2,
					content: question,
				},
			},
			{ _id: `${uuid.v4()}`, user: { _id: 1, content: text } },
			...messages,
		]);
		if (noOfCalculatorQuestions === 1) {
			setGptMessages((gptMessages) => [
				...gptMessages,
				{
					role: "assistant",
					content:
						calculatorQuestions[section as keyof typeof calculatorQuestions][0],
				},
			]);
		}

		setGptMessages((gptMessages) => [
			...gptMessages,
			{ role: "user", content: text },
			{
				role: "assistant",
				content: question,
			},
		]);
		setNoOfCalculatorQuestions((pre) => pre + 1);
	};

	const handleOnPress = () => {
		setText("");

		if (
			SectionType.HEALTH_CALCULATORS_BMI === section ||
			SectionType.HEALTH_CALCULATORS_BMR === section ||
			SectionType.HEALTH_CALCULATORS_CALORIE_MICRONUTRIENT === section
		) {
			continueChat(text);
			return;
		}

		sendMessage(text);
	};

	const chooseApi = (messages: Array<GptMessagetype>) => {
		switch (section) {
			case SectionType.LANGUAGE_CONVERTER:
				return chatApi.convertLanguage({
					messages: messages,
					from: fromLanguage,
					to: toLanguage,
				});
			case SectionType.LANGUAGE_COVER_LETTER:
				return chatApi.writeCoverLetter({ messages });
			case SectionType.LANGUAGE_SUMMARIZE:
				return chatApi.summarize({ messages });
			case SectionType.LANGUAGE_ESSAY:
				return chatApi.giveEssay({ messages });
			case SectionType.LANGUAGE_REPHRASE:
				return chatApi.rephrase({ messages });
			case SectionType.LANGUAGE_GRAMMARLY:
				return chatApi.grammarly({ messages });
			case SectionType.CODING_DSA:
				return chatApi.solveDsa({ messages, language: dsaLanguage });
			case SectionType.CODING_ERROR_FINDER:
				return chatApi.findErrorInCode({ messages });
			case SectionType.CODING_CODE_OPTIMIZATION:
				return chatApi.optimizeCode({ messages });
			case SectionType.CODING_WEBSITE_TEMPLATE:
				return chatApi.generateWebsiteTemplate({ messages });
			case SectionType.COOKING_RECIPE:
				return chatApi.generateRecipe({ messages });
			case SectionType.COOKING_DISH_GENERATOR:
				return chatApi.generateDish({ messages });
			case SectionType.SQL_QUERY:
				return chatApi.solveQuery({ messages });
			case SectionType.SQL_ERROR_FINDER:
				return chatApi.findErrorInQuery({ messages });
			case SectionType.HEALTH_DISEASE:
				return chatApi.letsKnowAboutDisease({ messages });
			case SectionType.HEALTH_CALCULATORS_BMI:
			case SectionType.HEALTH_CALCULATORS_BMR:
			case SectionType.HEALTH_CALCULATORS_CALORIE_MICRONUTRIENT:
				return chatApi.healthCalculators({ messages, section });
			case SectionType.MOVIES:
				return chatApi.getMovieRecommendation({ messages });
			// case SectionType.FUN_GAMING_EMOJI_GUESSER:
			// 	return chatApi.guessEmoji({ messages });
			default:
				return chatApi.getResponseChat("gpt-3.5-turbo", messages);
		}
	};

	const sendMessage = async (text: string, chatGptText?: string) => {
		text = text.trim();
		if (!text) return;

		const local = [
			{ _id: `${uuid.v4()}`, user: { _id: 2, content: "loading" } },
			{ _id: `${uuid.v4()}`, user: { _id: 1, content: text } },
			...messages,
		];
		setMessages(local);

		setIsSending(true);
		const req = [
			...gptMessages,
			{ role: "user", content: chatGptText || text },
		];
		const response = await chooseApi(req);
		setIsSending(false);

		if (!response.ok) {
			setHasTypedSomething(false);

			const [_, ...rest] = local;
			setMessages([
				{
					_id: `${uuid.v4()}`,
					user: {
						_id: 2,
						content: "We are Sorry 😥. Facing an error. Try after some time.",
					},
				},
				...rest,
			]);
			return;
		}

		setHasTypedSomething(true);
		const [_, ...rest] = local;
		setMessages([
			{
				_id: `${uuid.v4()}`,
				user: { _id: 2, content: response.data?.choices[0]?.message?.content },
			},
			...rest,
		]);
		setGptMessages([...req, response.data?.choices[0]?.message]);
	};

	const sendWithoutShowing = async (text: string) => {
		text = text.trim();
		if (!text) return;

		const local = [
			{ _id: `${uuid.v4()}`, user: { _id: 2, content: "loading" } },
			...messages,
		];
		setMessages(local);

		setIsSending(true);
		const req = [...gptMessages, { role: "user", content: text }];
		const response = await chooseApi(req);
		setIsSending(false);

		if (!response.ok) {
			setHasTypedSomething(false);

			const [_, ...rest] = local;
			setMessages([
				{
					_id: `${uuid.v4()}`,
					user: {
						_id: 2,
						content: "We are Sorry 😥. Facing an error. Try after some time.",
					},
				},
				...rest,
			]);
			return;
		}

		setHasTypedSomething(true);
		const [_, ...rest] = local;
		setMessages([
			{
				_id: `${uuid.v4()}`,
				user: {
					_id: 2,
					content: response.data?.choices[0]?.message?.content,
				},
			},
			...rest,
		]);
		setGptMessages([...req, response.data?.choices[0]?.message]);
	};

	useEffect(() => {
		if (question) sendMessage(question);

		if (section === SectionType.MOVIES) {
			let content = "";
			for (let key in filters) {
				if (filters[key].length === 0) return;
				content += `${content.length !== 0 ? "\n" : ""} ${key} : ${
					filters[key][0]
				}.`;
			}

			let prompt = "Give me top 15 ";
			const genre = filters["Genre"][0],
				rating = filters["Rating"][0],
				year = filters["Year"][0],
				language = filters["Languages"][0],
				type = filters["Type"][0];

			if (type === "All") prompt += " movies and series";
			else prompt += ` ${type}`;

			if (genre === "All") prompt += " where Genre can be of any type";
			else prompt += ` where Genre is of type ${genre}`;

			if (rating === "All") prompt += ", can be of any rating";
			else prompt += `, rating should be ${rating}`;

			if (language === "All") prompt += ", can be in any language";
			else prompt += `, should be in language ${language}`;

			if (year === "All") prompt += " of all time";
			else prompt += ` and it should be releasd on ${year}`;

			prompt +=
				". just give me movie names with year and imdb rating like this [name(year) - [rating]] and it should be presented in descending order of rating, do not give any other things.";
			sendMessage(content, prompt);
		} else if (section === SectionType.FUN_GAMING_GUESS_WHO) {
			sendWithoutShowing(
				"I am thinking about character. You must ask me yes/no questions, and I will respond with a yes or no. You must guess the character that i am thinking about based on my response. Start with the first question."
			);
		} else if (section === SectionType.FUN_GAMING_EMOJI_GUESSER) {
			const gusser = filters["Gusser"][0],
				topic = filters["Topic"][0];
			const prompt = `Let's play Emoji Translator game. ${
				gusser === "AI"
					? `Guess the emoji from topic ${topic} which I will be sending to you.`
					: `Give me an emoji or combination of emoji which will be an example of any ${topic}. I will guess. don't give me the answer. you will tell me it's correct or not.`
			}`;

			sendWithoutShowing(prompt);
		}
	}, []);

	useEffect(() => {
		load();
	}, [load]);

	useEffect(() => {
		navigation.addListener("beforeRemove", () => {
			if (isLoaded && hasTypedSomething) {
				show();
			}
		});
	}, [navigation, isLoaded, hasTypedSomething]);

	return (
		<View>
			<StatusBar backgroundColor="black" barStyle="light-content" />

			<View style={styles.chatViewContainer}>
				{section === SectionType.LANGUAGE_CONVERTER && (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
						}}
					>
						<DropDownPicker
							data={languages.speakingLanguages}
							onChange={(value: string) => setFromLanguage(value)}
							value={fromLanguage}
						/>

						<Icon name="arrowright" type={IconType.ANTDESIGN} />

						<DropDownPicker
							data={languages.speakingLanguages}
							onChange={(value: string) => setToLanguage(value)}
							value={toLanguage}
						/>
					</View>
				)}

				<FlatList
					data={messages}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => <ChatItem user={item.user} />}
					style={{
						marginBottom: 20,
						scaleY: -1,
					}}
				/>
			</View>

			<View style={styles.chatInputContainer}>
				{SectionType.CODING_DSA === section && (
					<DropDownPicker
						data={languages.codingLanguages}
						onChange={(value: string) => setDsaLanguage(value)}
						value={dsaLanguage}
						width="30%"
						showSearch={false}
					/>
				)}

				<ChatBox
					onPressSend={handleOnPress}
					autoFocus={!question}
					editable
					multiline
					onChageText={(text: string) => setText(text)}
					text={text}
					backgroundColor={colors.background}
					width={SectionType.CODING_DSA === section ? "60%" : "90%"}
					disabled={isSending}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	chatInputContainer: {
		height: "15%",
		alignItems: "center",
		backgroundColor: colors.black,
		flexDirection: "row",
		justifyContent: "center",
	},
	chatViewContainer: { height: "85%", backgroundColor: colors.black },
});
