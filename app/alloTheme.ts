import { DarkTheme, Theme } from '@react-navigation/native';

const alloTheme: Theme = {
	dark: true,
	colors: {
		...DarkTheme.colors,
		background: '#171417',
	},
	fonts: { ...DarkTheme.fonts },
};

export default alloTheme;
