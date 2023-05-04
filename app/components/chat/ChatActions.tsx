import { StyleSheet, View, Pressable } from "react-native";
import React from "react";

import useCopy from "../../hooks/useCopy";
import useShare from "../../hooks/useShare";
import useSpeak from "../../hooks/useSpeak";
import Icon from "../Icon";

import IconType from "../../enums/icons";
import colors from "../../constants/colors";

export default function ChatActions({ text }: { text: string }) {
	const { done, copy } = useCopy();
	const { share } = useShare();
	const { speak } = useSpeak();

	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Pressable
					android_ripple={{ color: colors.medium, borderless: false }}
					onPress={() => share(text)}
					style={styles.pressable}
				>
					<Icon name="share" type={IconType.FEATHER} size={18} />
				</Pressable>
			</View>

			<View style={styles.iconContainer}>
				<Pressable
					android_ripple={{ color: colors.medium, borderless: false }}
					onPress={() => speak(text)}
					style={styles.pressable}
				>
					<Icon name="sound" type={IconType.ANTDESIGN} size={18} />
				</Pressable>
			</View>

			<View style={[styles.iconContainer]}>
				<Pressable
					android_ripple={{ color: colors.medium, borderless: false }}
					onPress={() => copy(text)}
					style={styles.pressable}
				>
					{done ? (
						<Icon
							name="check"
							type={IconType.ANTDESIGN}
							color="green"
							size={18}
						/>
					) : (
						<Icon name="copy1" type={IconType.ANTDESIGN} size={18} />
					)}
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row", alignItems: "center" },
	pressable: {
		// backgroundColor: "yellow",
		height: 38,
		width: 38,
		justifyContent: "center",
		alignItems: "center",
	},
	iconContainer: {
		overflow: "hidden",
		height: 38,
		width: 38,
		borderRadius: 19,
		// marginRight: 2,
	},
});
