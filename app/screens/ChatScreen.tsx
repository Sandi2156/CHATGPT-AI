import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Chat from "../components/Chat";

type PropsType = { navigation: any; route: any };
export default function ChatScreen({ navigation, route }: PropsType) {
	return <Chat />;
}

const styles = StyleSheet.create({});
