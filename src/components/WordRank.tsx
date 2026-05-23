import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { WordCardContext } from "./WordCard/wordCardContext";

/**
 * Typing
 */
interface RankIconProps {
  score?: number;
  size?: number;
}

/**
 * RankIcon Component
 */
export function RankIcon({ score = 0, size = 12 }: RankIconProps) {
  if (score <= 5) return <MaterialIcons size={size} name="fiber-new" />
  if (score <= 15) return <MaterialIcons size={size} name="stars" />
  if (score <= 30) return <MaterialIcons size={size} name="military-tech" />
  if (score <= 60) return <MaterialIcons size={size} name="emoji-events" />
  if (score <= 80) return <MaterialIcons size={size} name="diamond" />
  else return <MaterialIcons size={size} name="psychology" />
}

/**
 * WordRank Component
 */
export default function WordRank() {
  const { cardState } = useContext(WordCardContext);

  /**
   * Destructure styles
   */
  const {
    wordRankContainer
  } = wordRankStyles;

  return (
    <View style={wordRankContainer}>
      <RankIcon
        score={cardState.word.userScore}
        size={30}
      />
    </View>
  )
}

/**
 * Styles
 */
const wordRankStyles = StyleSheet.create<Record<string, ViewStyle & TextStyle>>(({
  wordRankContainer: {
    margin: 2
  }
})); 