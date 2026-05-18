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
  const { setCardState } = useContext(CardContext);

  const {
    wcsContainer,
    wcsButton,
    wcsText
  } = wordCardSelectionStyles;

  const handleArticlePressToggle = (word: string) => {
    setCardState((cardState) => {
      if (word !== cardState.selectedArticle) {
        return ({ ...cardState, selectedArticle: word })
      } else {
        return ({ ...cardState, selectedArticle: null })
      }
    });

  }

  const handleWordPressToggle = (word: string) => {
    setCardState((cardState) => {
      if (word !== cardState.selectedWord) {
        return ({ ...cardState, selectedWord: word })
      } else {
        return ({ ...cardState, selectedWord: null })
      }
    });
  }

  return (
    <View style={wcsContainer}>
      {articleWords.map((article: string) => (
        <Animated.View
          key={article}
        >
          <Pressable
            style={wcsButton}
            onPress={() => handleArticlePressToggle(article)}
          >
            <Text style={wcsText}>{article}</Text>
          </Pressable>
        </Animated.View>
      ))}
      {fillerWords.map((word: string) => (
        <Pressable
          key={word}
          style={wcsButton}
          onPress={() => handleWordPressToggle(word)}
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
    position: 'static',
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