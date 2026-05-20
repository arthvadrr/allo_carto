import { createContext, type Dispatch, type SetStateAction } from 'react';
import { WordProps, initialWordState } from '../WordCard/cardContext';

export interface DeckState {
	currentIndex: number;
	currentId: string;
	deck: WordProps[];
}

interface DeckContextType {
	deckState: DeckState;
	setDeckState: Dispatch<SetStateAction<DeckState>>;
}

const initialDeckState: DeckState = {
	currentIndex: 0,
	currentId: '',
	deck: [initialWordState],
};

export const DeckContext = createContext<DeckContextType>({
	deckState: initialDeckState,
	setDeckState: () => {},
});
