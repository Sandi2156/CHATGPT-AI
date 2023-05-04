import { Share } from "react-native";
import React from "react";

const useShare = () => {
	const share = async (text: string) => {
		try {
			await Share.share({ message: text });
		} catch (error) {
			console.log(error);
		}
	};

	return { share };
};

export default useShare;
