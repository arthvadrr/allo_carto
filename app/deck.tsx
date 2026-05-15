import { Text, View } from "react-native";
import WordCard, { WordProps } from "./components/WordCard";

/**
 * TODO remove
 */
const exampleWord: WordProps = {
  id: 'chat',
  lemmaId: 'chat',
  article: 'le',
  partOfSpeech: 'noun',
  CEFRLevel: 'A1',
  gender: 'masculine',
  pronunciation: 'shaw',
  userScore: 12
}

export default function DeckView() {
  return (
    <View>
      <Text>Learn new words</Text>
      <WordCard word={exampleWord} />
    </View>
  )
}