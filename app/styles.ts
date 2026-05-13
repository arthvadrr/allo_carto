import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
	linkButtonStyles: {
		borderColor: '#444',
		borderRadius: 8,
		borderWidth: 2,
		padding: 18,
		margin: 18,
	},
	hoveredLinkButtonStyles: {
		borderRadius: 4,
		borderWidth: 2,
	},
});

export default styles;
