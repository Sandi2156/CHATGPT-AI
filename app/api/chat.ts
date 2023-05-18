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

const solveDsa = async ({
	model = "gpt-3.5-turbo",
	messages,
	language = "java and python",
}: {
	model?: string;
	language?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content =
			`Solve the dsa question ` + `in ${language} : ` + reqMessage.content;

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

const findErrorInCode = async ({
	model = "gpt-3.5-turbo",
	error,
	messages,
}: {
	model?: string;
	error?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = !error
			? `Find error in the given code if any : ` + reqMessage.content
			: `Find error in the given code where the error is ${error}` +
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

const optimizeCode = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = `Optimize the code : ` + reqMessage.content;

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

const generateWebsiteTemplate = async ({
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
			`I want to create a website. Generate a wesite template where the description of the website is : ` +
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

const generateRecipe = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = `Give me recipe of this dish : ` + reqMessage.content;

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

const generateDish = async ({
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
			`I have these following ingredients: ` +
			reqMessage.content +
			". Name me some dishes which I can make from the ingredients";

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

const solveQuery = async ({
	model = "gpt-3.5-turbo",
	messages,
}: {
	model?: string;
	messages: Array<object>;
}) => {
	try {
		const customMessages = [...messages];
		const reqMessage = customMessages[customMessages.length - 1];
		reqMessage.content = "Solve the sql query : " + reqMessage.content;

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

const findErrorInQuery = async ({
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
			"Find error in the sql query if any : " + reqMessage.content;

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
	solveDsa,
	findErrorInCode,
	optimizeCode,
	generateWebsiteTemplate,
	generateRecipe,
	generateDish,
	solveQuery,
	findErrorInQuery,
};

export default chatApi;
