import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://api.openai.com/v1/chat/completions",
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer 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",
		max_tokens: 1000,
	},
});

export default apiClient;
