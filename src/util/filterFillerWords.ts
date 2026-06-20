import shuffleArray from './shuffleArray';

export const frenchArticles = ['le', 'la', "l\'", 'les', 'un', 'une', 'des'];
export const englishArticles = ['the', 'a', 'an'];

/**
 * Typing
 */
interface FilterFillerWordsProps {
	amount: number;
	words?: string[];
	correctWords: string[];
}

/**
 * This is a helper function for
 * use with the buttons on flashcards.
 *
 * It returns a shuffled array of words that
 * includes the correct word.
 */
export default function filterFillerWords({
	amount,
	words = englishArticles,
	correctWords,
}: FilterFillerWordsProps) {
	/**
	 * Different French words can have the same English translation.
	 * This can create duplicate answer buttons when we combine their answers.
	 * Here we remove the duplicates
	 */
	const seenWords = new Set<string>();

	const uniqueWords = words.filter(word => {
		const normalizedWord = word.toLowerCase();

		if (seenWords.has(normalizedWord)) return false;

		seenWords.add(normalizedWord);
		return true;
	});

	const seenCorrectWords = new Set<string>();

	const uniqueCorrectWords = correctWords.filter(word => {
		const normalizedWord = word.toLowerCase();

		if (seenCorrectWords.has(normalizedWord)) return false;

		seenCorrectWords.add(normalizedWord);
		return true;
	});

	const lowerCaseCorrectWords = new Set(
		uniqueCorrectWords.map(word => word.toLowerCase()),
	);

	/**
	 * Remove the correct answer from this choices arr
	 * (also shuffle and slice to amount)
	 */
	const wordsCopy = [...shuffleArray(uniqueWords)]
		.filter(word => !lowerCaseCorrectWords.has(word.toLowerCase()))
		.slice(0, amount);

	return shuffleArray([
		...wordsCopy.filter(article => article !== 'DELETE'),
		...uniqueCorrectWords,
	]);
}
