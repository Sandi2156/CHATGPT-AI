import React from "react";

import Chat from "../components/chat/Chat";

type PropsType = { navigation: any; route: any };
export default function ChatScreen({ navigation, route }: PropsType) {
	const params = route.params;

	return <Chat question={params?.question} />;
}
