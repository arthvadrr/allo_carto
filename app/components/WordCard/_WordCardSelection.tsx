import { Text, View } from 'react-native';

interface WordCardSelectionProps {
  fillerWords: string[];
}

export default function WordCardSelection({ fillerWords }: WordCardSelectionProps) {
  return (
    <View>
      {fillerWords.map((word: string) => (
        <Text key={word}>{word}</Text>
      ))}
    </View>
  )
}