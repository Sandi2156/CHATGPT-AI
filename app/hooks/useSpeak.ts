import * as Speech from "expo-speech";

const useSpeak = () => {
	const isSpeaking = async () => {
		return await Speech.isSpeakingAsync();
	};

	const speak = async (text: string) => {
		if (await isSpeaking()) return Speech.stop();

		Speech.speak(text);
	};

	return { speak };
};

export default useSpeak;
