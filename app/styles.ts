import { StyleSheet } from 'react-native';

const colors = {
	dark: {
		primary: '#1C5B5E',
		secondary: '#762D3D',
		text: '#121212',
		background: '#131A1B',
	},
	light: {
		primary: '#7BADA6',
		secondary: '#E09FAD',
		text: '#F7F7F7',
		background: '#DBFBF0',
	},
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark.background,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.light.text,
	},
	linkButtonStyles: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.light.background,
		backgroundColor: colors.dark.primary,
		borderRadius: 8,
		borderWidth: 1,
		padding: 18,
		margin: 18,
		color: colors.light.text,
	},
	hoveredLinkButtonStyles: {
		borderRadius: 4,
		borderWidth: 2,
	},
	pressedLinkButtonStyles: {
		backgroundColor: 'red',
	},
});

export default styles;
