import React from "react";

import Chat from "../components/chat/Chat";

type PropsType = { navigation: any; route: any };
export default function ChatScreen({ navigation, route }: PropsType) {
	const { question } = route.params;

	return <Chat question={question} />;
}
