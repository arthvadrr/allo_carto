import { ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Text>hi</Text>
        <Text>hi</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    margin: 0,
    padding: 4,
    backgroundColor: '#ff0000'
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
  }
})