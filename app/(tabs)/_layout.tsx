import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

/**
 * Icon dir here
 * https://mui.com/material-ui/material-icons/
 */
export default function TabsLayout({ size = 28 }) {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons color={color} size={size} name="home" />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <MaterialIcons color={color} size={size} name="star" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <MaterialIcons color={color} size={size} name="settings" />,
        }}
      />
    </Tabs >
  )
}