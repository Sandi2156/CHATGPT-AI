import apiClient from "./client";

const getResponseChat = async (model: string, messages: Array<object>) => {
	try {
		const response = await apiClient.post("", { model, messages });

		return response;
	} catch (error) {
		console.log(error);
	}
};

const convertLanguage = async ({
	model = "gpt-3.5-turbo",
	messages,
	from,
	to,
}: {
	model?: string;
	messages: Array<object>;
	from: string;
	to: string;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content =
			`convert the sentence from ${from} to ${to} : ` + reqMessage.content;

		const response = await apiClient.post("", { model, messages });

		return response;
	} catch (error) {
		console.log(error);
	}
};

const chatApi = { getResponseChat, convertLanguage };

export default chatApi;
