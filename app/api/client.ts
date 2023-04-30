import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://api.openai.com/v1/chat/completions",
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer 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",
	},
});

export default apiClient;
