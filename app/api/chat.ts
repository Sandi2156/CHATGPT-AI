import apiClient from "./client";

const getResponseChat = async (model: string, messages: Array<object>) => {
	try {
		const response = await apiClient.post("", { model, messages });

		return response;
	} catch (error) {
		console.log(error);
	}
};

const convertLanguage = async ({
	model = "gpt-3.5-turbo",
	messages,
	from,
	to,
}: {
	model?: string;
	messages: Array<object>;
	from: string;
	to: string;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content =
			`convert the sentence from ${from} to ${to} : ` + reqMessage.content;

		const response = await apiClient.post("", {
			model,
			messages: customMessages,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

const summarize = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = `summarize : ` + reqMessage.content;

		console.log(customMessages);

		const response = await apiClient.post("", {
			model,
			messages: customMessages,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

const giveEssay = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = `Write an essay on this topic : ` + reqMessage.content;

		console.log(customMessages);

		const response = await apiClient.post("", {
			model,
			messages: customMessages,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

const rephrase = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = `Rephrase this : ` + reqMessage.content;

		console.log(customMessages);

		const response = await apiClient.post("", {
			model,
			messages: customMessages,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

const grammarly = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content =
			`Find the grammatical mistakes in the sentence or paragraph if any and write the sentence in five different ways : ` +
			reqMessage.content;

		console.log(customMessages);

		const response = await apiClient.post("", {
			model,
			messages: customMessages,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

const chatApi = {
	getResponseChat,
	convertLanguage,
	summarize,
	giveEssay,
	rephrase,
	grammarly,
};

export default chatApi;
