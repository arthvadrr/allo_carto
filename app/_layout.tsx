import { Stack } from "@/node_modules/expo-router";
import { ThemeProvider } from "@react-navigation/native";
import alloTheme from './alloTheme';

/*
 * Stack navigator
 * https://docs.expo.dev/router/advanced/stack/
 * 
 * Note: 
 * Showing the header literally shows "(tabs)" in the header, 
 * read about the stack component.
 */
export default function AppLayout() {
  return (
    <ThemeProvider value={alloTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
