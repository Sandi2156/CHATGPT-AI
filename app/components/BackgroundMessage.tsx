import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../constants/colors";

export default function BackgroundMessage() {
	return (
		<View>
			<View style={{ marginBottom: 0 }}>
				<Image
					source={require("../../assets/background/done-blank-dark2.png")}
					style={{
						resizeMode: "contain",
						flex: 1,
						height: 250,
						width: 250,
						alignSelf: "center",
					}}
				/>
			</View>

			<AppText
				color={colors.lightSky}
				style={{
					fontWeight: "400",
					fontSize: 14,
					fontFamily: "monospace",
					textAlign: "center",
				}}
			>
				Crafted with ❤️ in Bengaluru, India
			</AppText>
		</View>
	);
}

const styles = StyleSheet.create({});
