import { Stack } from "expo-router";

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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
