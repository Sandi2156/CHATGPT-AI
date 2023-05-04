import * as Speech from "expo-speech";
import { useState } from "react";

const useSpeak = () => {
	const [speaking, setSpeaking] = useState(false);

	const speak = async (text: string) => {
		if (await Speech.isSpeakingAsync()) return Speech.stop();

		Speech.speak(text, {
			onStart: () => setSpeaking(true),
			onStopped: () => setSpeaking(false),
			onDone: () => setSpeaking(false),
		});
	};

	return { speak, speaking };
};

export default useSpeak;
