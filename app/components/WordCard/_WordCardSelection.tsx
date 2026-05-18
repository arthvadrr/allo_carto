import { colors } from '@/app/styles';
import { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { CardContext } from './cardContext';

/**
 * Typing
 */
interface WordCardSelectionProps {
  articleWords: string[];
  fillerWords: string[];
}

/**
 * WordCardSelection Component
 */
export default function WordCardSelection({ articleWords, fillerWords }: WordCardSelectionProps) {
  const { cardState, setCardState } = useContext(CardContext);

  const {
    wcsContainer,
    wcsButton,
    wcsText
  } = wordCardSelectionStyles;

  const handleArticlePress = (word: string) => {
    setCardState((cardState) => {
      return ({ ...cardState, selectedArticle: word })
    });

    console.log(cardState);
  }

  const handleWordPress = (word: string) => {
    setCardState((cardState) => {
      return ({ ...cardState, selectedWord: word })
    });
  }

  console.log('article position', cardState.articlePosition);

  return (
    <View style={wcsContainer}>
      {articleWords.map((article: string) => (
        <Animated.View
          key={article}
          style={cardState.selectedArticle === article ? {
            position: 'absolute',

          } : {}}
        >
          <Pressable
            style={wcsButton}
            onPress={() => handleArticlePress(article)}
          >
            <Text style={wcsText}>{article}</Text>
          </Pressable>
        </Animated.View>
      ))}
      {fillerWords.map((word: string) => (
        <Pressable
          key={word}
          style={wcsButton}
          onPress={() => handleWordPress(word)}
        >
          <Text style={wcsText}>{word}</Text>
        </Pressable>
      ))}
    </View>
  )
}

/**
 * Styles
 */
const wordCardSelectionStyles = StyleSheet.create({
  wcsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    margin: 24
  },
  wcsButton: {
    backgroundColor: colors.light.background,
    borderRadius: 8,
    padding: 8,
    paddingRight: 16,
    paddingLeft: 16,
    boxShadow: `0 4px 0 0 ${colors.light.border}`
  },
  wcsText: {
    color: colors.dark.text
  }
});