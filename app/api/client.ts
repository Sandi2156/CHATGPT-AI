import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://api.openai.com/v1/chat/completions",
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer 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",
	},
});

export default apiClient;
