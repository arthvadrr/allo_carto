import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles";

export interface WordProps {
  id: string;
  pronunciation: string;
  CEFRLevel: string;
  lemmaId?: string;
  article?: string;
  gender?: 'feminine' | 'masculine';
  tense?: string;
  partOfSpeech?: string;
  userScore?: number;
}

interface WordCardProps {
  word: WordProps;
}

/**
 * Component
 */
export default function WordCard({ word }: WordCardProps) {
  const {
    id,
    pronunciation,
    CEFRLevel,
    userScore
  } = word;
  const {
    wordId,
    wordPronunciation,
    cardGradient,
    wordCard,
    cardCEFRLevel,
    cardUserScore,
    cardMain
  } = wordCardStyles;

  return (
    <View style={wordCard}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.light.primary, colors.dark.background]}
        style={cardGradient}
      >
        <Text style={cardCEFRLevel}>{CEFRLevel}</Text>
        <Text style={cardUserScore}>{userScore}</Text>
      </LinearGradient>
      <View style={cardMain}>
        <Text style={wordId}>{id}</Text>
        <Text style={wordPronunciation}>({pronunciation})</Text>
      </View>
    </View>
  )
}

/**
 * Styles
 */
const wordCardStyles = StyleSheet.create({
  wordCard: {
    backgroundColor: colors.light.background,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
    borderRadius: 8,
  },
  cardGradient: {
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 4,
    paddingRight: 8,
    paddingLeft: 8,
    gap: 4,
  },
  cardCEFRLevel: {
    color: colors.dark.text,
    fontSize: 16,
    fontWeight: '700',
  },
  cardUserScore: {
    color: colors.light.text,
    fontSize: 16,
    fontWeight: '700',
  },
  cardMain: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    paddingRight: 8,
    paddingLeft: 8,
  },
  wordId: {
    color: colors.dark.text,
    fontSize: 24,
    fontWeight: '700',
  },
  wordPronunciation: {
    color: colors.dark.text
  }
});