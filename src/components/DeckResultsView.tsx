import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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
    imageBackgroundStyle,
    checkMarKContainerStyle,
    wordRowContainerStyle,
    wordRowStyle,
    frenchWordStyle,
    englishWordStyle,
    CEFRStyle,
    userScoreStyle,
    successStyle,
    dangerStyle
  } = styles;

  const { words } = cardDeckState.cardDeck;

  const correctWords = words.filter((word: Word) => word.userScore === 1);
  const incorrectWords = words.filter((word: Word) => word.userScore === 0);

  return (
    <View style={resultsContainerStyle}>
      <View style={deckDetailsContainerStyle}>
        <ImageBackground source={cardDeckState.cardDeck.image} style={imageBackgroundStyle} />
      </View>
      <View style={wordsFlexRows}>
        <View style={wordsListStyle}>
          <Text style={sectionTitleStyle}>Correct</Text>
          {correctWords.length > 0 && correctWords.map((word: Word) => {
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
                    color={colors.dark.success}
                  />
                  <View style={wordRowStyle}>
                    <Text style={frenchWordStyle}>{frenchWord}</Text>
                    <Text style={[englishWordStyle, successStyle]}>{englishWords.join(', ')}</Text>
                  </View>
                </View>
                <View style={userScoreStyle}>
                  <Text></Text>
                </View>
                <Text style={[CEFRStyle, { backgroundColor: colors.light.CEFR[CEFR] }]}>{CEFR}</Text>
              </View>
            );
          })}
          {correctWords.length === 0 && <Text>Wow, you need practice!</Text>}
        </View>
        <View style={wordsListStyle}>
          <Text style={sectionTitleStyle}>Incorrect</Text>
          {incorrectWords.length > 0 && incorrectWords.map((word: Word) => {
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
                    color={colors.dark.danger}
                  />
                  <View style={wordRowStyle}>
                    <Text style={frenchWordStyle}>{frenchWord}</Text>
                    <Text style={[englishWordStyle, dangerStyle]}>{englishWords.join(', ')}</Text>
                  </View>
                </View>
                <Text style={[CEFRStyle, { backgroundColor: colors.light.CEFR[CEFR] }]}>{CEFR}</Text>
              </View>
            );
          })}
          {incorrectWords.length === 0 && <Text>You got every word correct, nicely done!</Text>}
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
  imageBackgroundStyle: {

  },
  wordsFlexRows: {
    display: 'flex',
    gap: 16,
    padding: 16,
  },
  wordRowContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.light.border,
    padding: 4,
  },
  wordRowStyle: {
    padding: 4,
  },
  checkMarKContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  sectionTitleStyle: {
    fontSize: 18,
    fontWeight: 800,
    color: colors.dark.text
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
    fontWeight: 800,
  },
  successStyle: {
    color: colors.dark.success
  },
  dangerStyle: {
    color: colors.dark.danger
  },
  userScoreStyle: {

  },
  CEFRStyle: {
    fontSize: 12,
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.light.border
  },
})