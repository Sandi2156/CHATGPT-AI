import copyToClipboard from "../utility/copy";
import { useState } from "react";

const useCopy = () => {
	const [done, setDone] = useState(false);

	const copy = async (text: string) => {
		try {
			await copyToClipboard(text);
			setDone(true);

			setTimeout(() => {
				setDone(false);
			}, 2000);
		} catch (error) {
			setDone(false);
		}
	};

	return { done, copy };
};

export default useCopy;
