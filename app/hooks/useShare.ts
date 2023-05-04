import { Share } from "react-native";

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
