import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import AppText from "../../../components/AppText";
import Icon from "../../../components/Icon";
import IconType from "../../../enums/icons";
import colors from "../../../constants/colors";

export default function IngredientItem({
	value,
	addInFilter,
	isSelected,
	removeFromFilter,
	type,
}: {
	value: string;
	isSelected: boolean;
	addInFilter: (type: string, value: string) => void;
	removeFromFilter: (type: string, value: string) => void;
	type: string;
}) {
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				isSelected ? removeFromFilter(type, value) : addInFilter(type, value)
			}
		>
			<View
				style={[
					styles.container,
					{ backgroundColor: isSelected ? colors.orange : colors.black },
				]}
			>
				{/* <Icon
					name={isSelected ? "minus" : "plus"}
					type={IconType.ENTYPO}
					size={15}
				/> */}

				<AppText
					style={{
						fontWeight: "400",
						marginLeft: 2,
						textAlign: "center",
					}}
					color={colors.lightBlue}
				>
					{value}
				</AppText>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		marginRight: 5,
		marginBottom: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
		borderRadius: 10,
	},
});
