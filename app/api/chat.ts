import apiClient from "./client";

const getResponseChat = async (model: string, messages: Array<object>) => {
	const response = await apiClient.post("", { model, messages });

	return response;
};

const chatApi = { getResponseChat };

export default chatApi;
