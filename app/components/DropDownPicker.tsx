import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import colors from "../constants/colors";

type PropsType = {
	data: Array<{ label: string; value: string }>;
	value: string | null;
	onChange: (value: string) => void;
};
const DropdownComponent = (props: PropsType) => {
	const { data, onChange, value } = props;

	const renderItem = (item: PropsType["data"][0]) => {
		return (
			<View
				style={[
					styles.item,
					item.value === value ? { backgroundColor: colors.background } : null,
				]}
			>
				<Text
					style={[
						styles.textItem,
						item.value === value ? { color: colors.lightPink } : null,
					]}
				>
					{item.label}
				</Text>
			</View>
		);
	};

	return (
		<Dropdown
			style={styles.dropdown}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			inputSearchStyle={styles.inputSearchStyle}
			itemContainerStyle={styles.itemContainerStyle}
			containerStyle={styles.containerStyle}
			data={data}
			search
			maxHeight={300}
			labelField="label"
			valueField="value"
			placeholder="Custom"
			searchPlaceholder="Search..."
			value={value}
			onChange={(item) => {
				onChange(item.value);
			}}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			autoScroll={false}
		/>
	);
};

export default DropdownComponent;

const styles = StyleSheet.create({
	dropdown: {
		margin: 16,
		height: 50,
		width: "35%",
		backgroundColor: colors.black,
		borderRadius: 10,
		padding: 12,
		shadowColor: "#000",
		color: colors.medium,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	icon: {
		marginRight: 5,
	},
	item: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.black,
	},
	textItem: {
		flex: 1,
		fontSize: 16,
		color: colors.lightSky,
		textAlign: "center",
	},
	placeholderStyle: {
		fontSize: 16,
		color: colors.medium,
	},
	selectedTextStyle: {
		fontSize: 16,
		color: colors.lightGreen,
		textAlign: "center",
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
		color: colors.medium,
		borderColor: colors.black,
		backgroundColor: colors.background,
		borderRadius: 6,
		overflow: "hidden",
	},
	itemContainerStyle: { backgroundColor: colors.black },
	containerStyle: {
		backgroundColor: colors.black,
		borderColor: colors.black,
		borderRadius: 10,
		overflow: "hidden",
	},
});
