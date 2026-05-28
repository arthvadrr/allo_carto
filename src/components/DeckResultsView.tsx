import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../app/styles";
import type { Word } from "./CardDeck/cardDeckTypes";
import { useCardDeck } from "./CardDeck/useCardDeck";
/**
 * DeckResultsView component
 * 
 * TODO: We need to derive all sorts
 * of components from this thing
 */
export default function DeckResultsView() {
  const { cardDeckState } = useCardDeck();

  const {
    resultsContainerStyle,
    deckDetailsContainerStyle,
    wordsFlexRows,
    wordsListStyle,
    sectionTitleStyle,
    checkMarKContainerStyle,
    wordRowContainerStyle,
    wordRowStyle,
    frenchWordStyle,
    englishWordStyle,
    CEFRStyle
  } = styles;

  const { words } = cardDeckState.cardDeck;

  const correctWords = words.filter((word: Word) => word.userScore === 1);
  const incorrectWords = words.filter((word: Word) => word.userScore === 0);

  return (
    <View style={resultsContainerStyle}>
      <View style={deckDetailsContainerStyle}>

      </View>
      <View style={wordsFlexRows}>
        <View style={wordsListStyle}>
          <Text style={sectionTitleStyle}>Correct</Text>
          {correctWords.length && correctWords.map((word: Word) => {
            const {
              frenchWord,
              userScore,
              englishWords,
              CEFR
            } = word;

            return (
              <View key={`${frenchWord}-${userScore}`} style={wordRowContainerStyle}>
                <View style={checkMarKContainerStyle}>
                  <MaterialIcons
                    name="check"
                    size={24}
                    color="green"
                  />
                  <View style={wordRowStyle}>
                    <Text style={frenchWordStyle}>{frenchWord}</Text>
                    <Text style={englishWordStyle}>{englishWords.join(', ')}</Text>
                  </View>
                </View>
                <Text style={[CEFRStyle, { backgroundColor: colors.light.CEFR[CEFR] }]}>{CEFR}</Text>
              </View>
            );
          })}
          {correctWords.length === 0 && <Text>Wow, you need practice!</Text>}
        </View>
        <View style={wordsListStyle}>
          <Text style={sectionTitleStyle}>Incorrect</Text>
          {incorrectWords.map((word: Word) => {
            const { frenchWord, userScore, CEFR } = word;

            return (
              <View key={`${frenchWord}-${userScore}`}>
                <View style={wordRowStyle}>
                  <Text style={frenchWordStyle}>{frenchWord}</Text>
                  <Text>{CEFR}</Text>
                </View>
              </View>
            );
          })}
          {incorrectWords.length === 0 && <Text>Nothing incorrect.{'\n'}Good job!</Text>}
        </View>
      </View>
    </View>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  resultsContainerStyle: {
    display: 'flex',
    backgroundColor: colors.light.background,
  },
  deckDetailsContainerStyle: {

  },
  wordsFlexRows: {

  },
  wordRowContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    padding: 8,
    gap: 20,
  },
  wordRowStyle: {
    padding: 4,
    paddingLeft: 0,
    paddingRight: 0,
  },
  checkMarKContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  sectionTitleStyle: {
    fontSize: 24,
    fontWeight: 700
  },
  wordsListStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
  frenchWordStyle: {
    fontSize: 16,
    fontWeight: 500
  },
  englishWordStyle: {
    fontSize: 16,
    fontWeight: 700,
    color: colors.dark.success
  },
  CEFRStyle: {
    fontSize: 12,
    borderRadius: 4,
    padding: 4,
  },
  userScoreStyle: {

  }
})