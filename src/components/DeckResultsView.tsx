import { StyleSheet, Text, View } from "react-native";
import { colors } from "../app/styles";
import type { Word } from "./CardDeck/cardDeckTypes";
import { useCardDeck } from "./CardDeck/useCardDeck";

/**
 * DeckResultsView component
 */
export default function DeckResultsView() {
  const { cardDeckState } = useCardDeck();

  const {
    resultsContainerStyle,
    deckDetailsContainerStyle,
    wordsFlexRows,
    wordsListStyle,
    sectionTitleStyle,
    wordRowStyle,
    frenchWordStyle,
  } = styles;

  const { words } = cardDeckState.cardDeck;

  console.log(cardDeckState.cardDeck);

  const correctWords = words.filter((word: Word) => word.userScore === 1);
  const incorrectWords = words.filter((word: Word) => word.userScore === 0);

  return (
    <View style={resultsContainerStyle}>
      <View style={deckDetailsContainerStyle}>

      </View>
      <View style={wordsFlexRows}>
        <View style={wordsListStyle}>
          <Text style={sectionTitleStyle}>Correct</Text>
          {correctWords.map((word: Word) => {
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wordRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  sectionTitleStyle: {
    fontSize: 24,
    fontWeight: 700
  },
  wordsListStyle: {
    display: 'flex',
    flexDirection: 'column'
  },
  frenchWordStyle: {

  },
  userScoreStyle: {

  }
})