import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface CardStateProps {
	selectedArticle: string | null;
	selectedWord: string | null;
	articlePosition: string[];
	wordPosition: string[];
}

export const initialCardState: CardStateProps = {
	selectedArticle: null,
	selectedWord: null,
	articlePosition: [],
	wordPosition: [],
};

interface CardContextType {
	cardState: CardStateProps;
	setCardState: Dispatch<SetStateAction<CardStateProps>>;
}

export const CardContext = createContext<CardContextType>({
	cardState: initialCardState,
	setCardState: () => {},
});
