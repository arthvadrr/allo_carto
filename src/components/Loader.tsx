import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { colors } from "../app/styles";

export default function Loader() {
  const {
    container,
    cardContainer,
    card,
    cardText,
    textContainer,
    text
  } = styles;

  const cardX = useSharedValue<number>(0);
  const cardRotate = useSharedValue<number>(0);
  const cardZIndex = useSharedValue<number>(0);

  const cardOne = useAnimatedStyle(() => ({
    transform: [
      { translateX: cardX.value },
      { rotateX: `${cardRotate.value}deg` }
    ],
    zIndex: cardZIndex.value
  }));

  useEffect(() => {
    async function turnCard() {

    }
  }, [])

  return (
    <Animated.View style={container}>
      <Animated.View style={cardContainer}>
        <Animated.View style={[card, cardOne]}>
          <Text style={cardText}>AC</Text>
        </Animated.View>
        <Animated.View style={card}>
          <Text style={cardText}>AC</Text>
        </Animated.View>
        <Animated.View style={card}>
          <Text style={cardText}>AC</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View style={textContainer}>
        <Text style={text}>Loading...</Text>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  cardContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8
  },
  card: {
    position: 'absolute',
    backgroundColor: colors.dark.primary,
    borderColor: colors.dark.border,
    borderWidth: 4,
    borderRadius: 12,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    boxShadow: `4px 4px 4px 0 ${colors.dark.text}`,
    transform: [{
      translateX: 0,
    }],
  },
  cardText: {
    fontWeight: 800,
    fontSize: 20,
    color: colors.dark.border
  },
  textContainer: {
    marginTop: 8,
    flex: 1,
    alignItems: 'center',
    height: '50%',
  },
  text: {
    fontWeight: 700,
    fontSize: 18,
    color: colors.light.text,
  }
});