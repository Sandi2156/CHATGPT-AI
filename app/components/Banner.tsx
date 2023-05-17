import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableWithoutFeedback,
} from "react-native";

import colors from "../constants/colors";

export default function Banner({ onPress }: { onPress: () => void }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Image
					source={require("../../assets/banner8.png")}
					style={styles.img}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 320,
		height: 150,
		overflow: "hidden",
		alignSelf: "center",
		backgroundColor: colors.medium,
		borderRadius: 10,
	},
	img: {
		height: 150,
		width: 320,
	},
});
