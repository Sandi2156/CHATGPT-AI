import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://api.openai.com/v1/chat/completions",
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer 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",
	},
});

export default apiClient;
