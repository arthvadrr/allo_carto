import { useEffect, useReducer } from 'react';
import { View } from 'react-native';
import type { WordProps } from './components/WordCard/cardContext';
import { initialWordState } from './components/WordCard/cardContext';
import WordCardContainer from "./components/WordCard/WordCardContainer";
import { sleep } from './util/getFillerWords';

/**
 * TODO remove. 
 */
const mockDeck: WordProps[] = [
  {
    id: 'chien',
    translation: 'dog',
    lemmaId: 'chien',
    frenchArticle: 'le',
    englishArticle: 'The',
    partOfSpeech: 'noun',
    CEFRLevel: 'A1',
    gender: 'masculine',
    pronunciation: 'luh shee-ehn',
    userScore: 9
  },
  {
    id: 'maison',
    translation: 'house',
    lemmaId: 'maison',
    frenchArticle: 'la',
    englishArticle: 'The',
    partOfSpeech: 'noun',
    CEFRLevel: 'A1',
    gender: 'feminine',
    pronunciation: 'lah meh-zohn',
    userScore: 14
  },
  {
    id: 'livre',
    translation: 'book',
    lemmaId: 'livre',
    frenchArticle: 'le',
    englishArticle: 'The',
    partOfSpeech: 'noun',
    CEFRLevel: 'A1',
    gender: 'masculine',
    pronunciation: 'luh leev-uh',
    userScore: 7
  },
  {
    id: 'pomme',
    translation: 'apple',
    lemmaId: 'pomme',
    frenchArticle: 'la',
    englishArticle: 'The',
    partOfSpeech: 'noun',
    CEFRLevel: 'A1',
    gender: 'feminine',
    pronunciation: 'lah pom',
    userScore: 11
  }
];

/**
 * Typing
 */
interface DeckState {
  currentIndex: number;
  currentId: string;
  deck: WordProps[];
}

type DeckAction =
  | { type: 'get_a_deck' }
  | { type: 'next_word' };

/**
 * Init Deck state
 */
const initialDeckState: DeckState = {
  currentIndex: 0,
  currentId: '',
  deck: [initialWordState]
};

/**
 * A reducer for deck state
 */
function deckDispatch(state: DeckState, action: DeckAction): DeckState {
  if (action.type === 'get_a_deck') {
    return { ...state, deck: mockDeck };
  }

  if (action.type === 'next_word') {
    const nextIndex = state.currentIndex + 1;
    const nextWord = state.deck[nextIndex];

    return {
      ...state,
      currentIndex: nextIndex,
      currentId: nextWord?.id ?? state.currentId
    };
  }

  return state;
}

/**
 * DeckView component
 */
export default function DeckView() {
  const [currentDeck, dispatchDeck] = useReducer(deckDispatch, initialDeckState);

  /**
   * Get a deck (async)
   */
  useEffect(() => {
    async function mockGetDeck() {
      sleep(50);
      dispatchDeck({ type: 'get_a_deck' });
    }

    mockGetDeck();
  }, []);

  /**
   * Render the deck
   */
  return (
    <View>
      <WordCardContainer
        word={currentDeck.deck[currentDeck.currentIndex]}
      />
    </View>
  )
}
