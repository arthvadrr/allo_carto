import { colors } from '@/app/styles';
import { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CardContext } from './cardContext';

interface WordCardSelectionProps {
  articleWords: string[];
  fillerWords: string[];
}

export default function WordCardSelection({ articleWords, fillerWords }: WordCardSelectionProps) {
  const { setCardState } = useContext(CardContext);

  const {
    wcsContainer,
    wcsButton,
    wcsText
  } = wordCardSelectionStyles;

  const handleArticlePress = (word: string) => {
    setCardState((cardState) => {
      return ({ ...cardState, selectedArticle: word })
    })
  }

  const handleWordPress = (word: string) => {
    setCardState((cardState) => {
      return ({ ...cardState, selectedWord: word })
    })
  }

  return (
    <View style={wcsContainer}>
      {articleWords.map((article: string) => (
        <Pressable
          key={article}
          style={wcsButton}
          onPress={() => handleArticlePress(article)}
        >
          <Text style={wcsText}>{article}</Text>
        </Pressable>
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