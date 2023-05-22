import { create } from "apisauce";

import CryptoJS from "react-native-crypto-js";

const bytes = CryptoJS.AES.decrypt(
	"U2FsdGVkX1+eCRnNiWW91H5rwiQ7F8oyhqp5cqiCwNzq4M94MirAb6WJoRy9pQRB+e9e7bwBwoHlYIbzIPMyerFs6kEKKKFqm+a8uv/Olqk=",
	"Edjl7&)r9t8@Q#h%Hy+M"
);
const token = bytes.toString(CryptoJS.enc.Utf8);

const apiClient = create({
	baseURL: "https://api.openai.com/v1/chat/completions",
	headers: {
		"Content-Type": "application/json",
		Authorization: token,
		max_tokens: 1000,
	},
});

export default apiClient;
