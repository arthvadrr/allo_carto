import { useEffect, useState } from "react";
import { View } from "react-native";
import WordCardSelection from "./components/WordCard/_WordCardSelection";
import WordCard, { WordProps } from "./components/WordCard/WordCard";
import getFillerWords from "./util/getFillerWords";

/**
 * TODO remove
 */
const mockWord: WordProps = {
  id: 'chat',
  translation: 'cat',
  lemmaId: 'chat',
  frenchArticle: 'le',
  englishArticle: 'The',
  partOfSpeech: 'noun',
  CEFRLevel: 'A1',
  gender: 'masculine',
  pronunciation: 'lay shaw',
  userScore: 12
}

export default function CardContainer() {
  const [fillerWords, setFillerWords] = useState<string[]>([]);

  useEffect(() => {
    async function loadWords() {
      setFillerWords(await getFillerWords({
        correctWord: mockWord.id
      }));
    }

    loadWords();
  }, []);

  return (
    <View>
      <WordCard word={mockWord} />
      <WordCardSelection fillerWords={fillerWords} />
    </View>
  )
}