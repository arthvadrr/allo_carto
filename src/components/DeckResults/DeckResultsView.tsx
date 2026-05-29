import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from "../../app/styles";
import type { Word } from "../CardDeck/cardDeckTypes";
import { useCardDeck } from "../CardDeck/useCardDeck";
import GradientText from '../GradientText';
import ResultsList from './ResultsList';

/**
 * DeckResultsView component
 * 
 * TODO: We need to derive all sorts
 * of components from this thing
 */
export default function DeckResultsView() {
  const { cardDeckState } = useCardDeck();
  const { words } = cardDeckState.cardDeck;
  const correctWords = words.filter((word: Word) => word.userScore === 1);
  const incorrectWords = words.filter((word: Word) => word.userScore === 0);

  /**
   * Destructure styles
   */
  const {
    titleStyle,
    deckDetailsContainerStyle,
    resultsContainerStyle,
    wordsFlexRows,
    imageBackgroundStyle,
  } = styles;

  /**
   * Render the deck results
   */
  return (
    <View style={resultsContainerStyle}>
      <View style={deckDetailsContainerStyle}>
        <View>
          <Text style={titleStyle}>Good jobe! You completed the
            <GradientText
              text='Coffee Shop'
              colors={[colors.dark.primary, colors.dark.text]}
              fontSize={22}
              fontWeight={700}
            />
            deck.
          </Text>
        </View>
        <ImageBackground source={cardDeckState.cardDeck.image} style={imageBackgroundStyle} />
      </View>
      <View style={wordsFlexRows}>
        <ResultsList
          wordArr={correctWords}
          isCorrect={true}
        />
        <ResultsList
          wordArr={incorrectWords}
          isCorrect={false}
        />
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
    margin: 32,
    borderRadius: 16,
    boxShadow: `0 16px 0 ${colors.dark.border}`
  },
  deckDetailsContainerStyle: {

  },
  titleStyle: {
    fontSize: 22,
    fontWeight: 700,
  },
  imageBackgroundStyle: {
    height: 200
  },
  wordsFlexRows: {
    display: 'flex',
    gap: 8,
    padding: 16,
  },
})