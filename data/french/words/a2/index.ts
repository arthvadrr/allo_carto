import { words_a2_adjectives } from './adjectives/words_a2_adjectives';
import { words_a2_adverbs } from './adverbs/words_a2_adverbs';
import { words_a2_expressions } from './expressions/words_a2_expressions';
import { words_a2_nouns } from './nouns/words_a2_nouns';
import { words_a2_prepositions } from './prepositions/words_a2_prepositions';

export * from './adjectives/words_a2_adjectives';
export * from './adverbs/words_a2_adverbs';
export * from './expressions/words_a2_expressions';
export * from './nouns/words_a2_nouns';
export * from './prepositions/words_a2_prepositions';

export const words_a2 = [
	...words_a2_adjectives,
	...words_a2_adverbs,
	...words_a2_expressions,
	...words_a2_nouns,
	...words_a2_prepositions,
];
