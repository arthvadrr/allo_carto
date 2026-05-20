import { useEffect, useReducer } from 'react';
import { View } from 'react-native';
import { sleep } from '../../util/getFillerWords';
import { initialWordState } from '../WordCard/cardContext';
import WordCardContainer from "../WordCard/WordCardContainer";
import { DeckState } from './deckContext';
import { mockDeck } from './mockDeck';

type DeckAction =
  | { type: 'get_a_deck' }
  | { type: 'next_word' };

/**
 * Init Deck state
 */
const initialDeck: DeckState = {
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
  const [currentDeck, dispatchDeck] = useReducer(deckDispatch, initialDeck);

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
