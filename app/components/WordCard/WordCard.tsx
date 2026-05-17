import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
import filterFillerWords from '../../util/filterFillerWords';
import { CardContext } from './cardContext';

export interface WordProps {
  id: string;
  translation: string;
  pronunciation: string;
  CEFRLevel: string;
  lemmaId?: string;
  frenchArticle?: string;
  englishArticle?: string;
  tense?: string;
  gender?: 'feminine' | 'masculine';
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
    userScore,
    frenchArticle,
    englishArticle,
    translation
  } = word;
  const {
    wordId,
    wordPronunciation,
    cardGradient,
    wordCard,
    cardCEFRLevel,
    cardUserScore,
    cardMain,
    answerSlotContainer,
    answerSlot,
  } = wordCardStyles;

  console.log('getting articles!')
  console.log(filterFillerWords({ amount: 4, correctWord: 'les' }))

  const { setCardState } = useContext(CardContext);

  /**
   * To "move" the user's selected article or word
   * to the card slots we need to store their positions (layout)
   * on the view.
   */
  const setArticleSlotPos = (e: any) => {
    const layout = e.nativeEvent.layout;

    setCardState(cardState => {
      return ({ ...cardState, articlePosition: layout })
    })
  }

  const setWordSlotPos = (e: any) => {
    const layout = e.nativeEvent.layout;

    setCardState(cardState => {
      return ({ ...cardState, wordPosition: layout })
    })
  }

  return (
    <View style={wordCard}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.light.primary, colors.dark.border]}
        style={cardGradient}
      >
        <Text style={cardCEFRLevel}>{CEFRLevel}</Text>
        <Text style={cardUserScore}>{userScore}</Text>
      </LinearGradient>
      <View style={cardMain}>
        <Text style={wordId}>{frenchArticle}&nbsp;{id}</Text>
        <Text style={wordPronunciation}>({pronunciation})</Text>
      </View>
      <View style={answerSlotContainer}>
        {englishArticle && (
          <Text style={answerSlot} onLayout={e => setArticleSlotPos(e)}>{englishArticle}</Text>
        )}
        <Text style={answerSlot} onLayout={e => setWordSlotPos(e)}>{translation}</Text>
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
  },
  answerSlotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 12
  },
  answerSlot: {
    borderBottomWidth: 2,
    color: 'transparent',
    paddingRight: 8,
    paddingLeft: 8,
    fontWeight: 500,
    fontSize: 18
  }
});