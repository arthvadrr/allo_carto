# French Word Gloss Audit

Initial pass: 2026-06-24

Scope: quick editorial review of the current word data, using general French knowledge and the existing deck contexts. This is not a complete OQLF/Vitrine Linguistique citation pass.

Status: the concrete glossary fixes from this pass were applied after review. The tables below preserve the original glosses as an audit trail and keep a few contextual watchlist items for future deck/clue decisions.

## Highest Priority

These glosses look likely to teach the wrong default meaning, or they are much narrower than the French word itself.

| File | ID | French | Original gloss | Concern | Applied direction |
| --- | --- | --- | --- | --- | --- |
| `data/french/words/a1/verbs/words_a1_verbs.ts` | `word_verb_quitter` | quitter | to say goodbye | Too misleading as the main gloss. `Quitter` is primarily "to leave"; "to say goodbye" is usually `dire au revoir`. | Change to `to leave`; only use "say goodbye" in a clue sentence if the context justifies it. |
| `data/french/words/a1/verbs/words_a1_verbs.ts` | `word_verb_rouler` | rouler | to hit the road | Too idiomatic. `Rouler` is "to roll" or, in travel/Quebec car context, "to drive". | Change to `to drive` for travel decks, or `to roll` if used generally. |
| `data/french/words/a1/words_a1_elevator_epics.ts` | `word_preposition_chez` | chez | at | Too thin for `chez`; it means "at/to the home or place of" and can also mean "among/in the work of". | Change to `at someone's place` or `at the home of`. |
| `data/french/words/c1/prepositions/words_c1_room_keys_prepositions.ts` | `word_preposition_moyennant` | moyennant | for | Too broad. `Moyennant` means "in return for / in exchange for / for a fee of", not ordinary `pour`. | Change to `in exchange for` or `for a fee of`. |
| `data/french/words/c1/prepositions/words_c1_room_keys_prepositions.ts` | `word_preposition_aupres_de` | auprès de | near | In modern usage, often "with / to / auprès de an authority/person"; "near" is possible but may underteach the administrative/service sense. | In hotel context, consider `with` or `from`; otherwise `near` is acceptable only spatially. |
| `data/french/words/c1/prepositions/words_c1_room_keys_prepositions.ts` | `word_preposition_faute_de` | faute de | lacking | More naturally a prepositional phrase: "for lack of" or "due to lack of". | Change to `for lack of`. |

## Medium Priority

These are not necessarily wrong, but they are context-dependent, regional, or likely to need a better first gloss.

| File | ID | French | Original gloss | Concern | Applied direction / note |
| --- | --- | --- | --- | --- | --- |
| `data/french/words/a1/adjectives/words_a1_adjectives.ts` | `word_adjective_grand` / `word_adjective_grande` | grand / grande | tall | Correct for people, but `grand` is also "big/large/great". | Changed to `tall / large`. |
| `data/french/words/a1/verbs/words_a1_verbs.ts` | `word_verb_debarquer` | débarquer | to get out | Good in Quebec/transit context, but broader French is "to disembark / get off". | Consider `to get off` or `to disembark` if the deck is travel-oriented. |
| `data/french/words/a2/nouns/words_a2_gate_nouns.ts` | `word_noun_indication` | indication | directions | Plausible in wayfinding, but singular `indication` is more "indication / instruction / piece of information". | Consider `direction` or `indication`; keep `directions` only in signage context. |
| `data/french/words/a2/nouns/words_a2_gate_nouns.ts` | `word_noun_agent` | agent | agent | Technically fine, but may not help learners; in airport context usually "staff member/agent". | Consider `staff member` or `agent`. |
| `data/french/words/a2/nouns/words_a2_nouns.ts` | `word_noun_addition` | addition | check | Correct in North American restaurant English; "bill" is more broadly international. | Consider `bill` or `check`. |
| `data/french/words/a2/nouns/words_a2_nouns.ts` | `word_noun_char` | char | car | Correct Quebec usage, not standard France default. | Left unchanged because the deck appears to intentionally include Quebec French. |
| `data/french/words/a2/nouns/words_a2_nouns.ts` | `word_noun_coffre` | coffre | trunk | Correct for car trunk, but `coffre` can also be chest/box/safe. | Keep in car/travel context; otherwise add/choose `chest` or `safe`. |
| `data/french/words/a2/nouns/words_a2_nouns.ts` | `word_noun_stationnement` | stationnement | parking lot | In Quebec, can mean parking/parking lot; in broader French often "parking" as an action/state. | Left unchanged because the deck appears to intentionally include Quebec French. |
| `data/french/words/a2/prepositions/words_a2_prepositions.ts` | `word_preposition_jusqua` | jusqu'à | as far as | Good for physical distance, but misses common "until / up to". | Consider `until` or `up to`; use `as far as` only for place. |
| `data/french/words/a2/adverbs/words_a2_adverbs.ts` | `word_adverb_prudemment` | prudemment | carefully | Acceptable, but "cautiously" is closer. | Consider `cautiously`. |
| `data/french/words/a2/adjectives/words_a2_adjectives.ts` | `word_adjective_presse` | pressé | rushed | Understandable, but the learner-friendly idiom is "in a hurry". | Consider `in a hurry`. |
| `data/french/words/a2/words_a2_elevator_epics.ts` | `word_adjective_drole` | drôle | funny | Correct, but also commonly "strange/odd"; overlaps with `bizarre`. | Changed to `odd` for the eerie elevator context. |
| `data/french/words/b1/nouns/words_b1_nouns.ts` | `word_noun_blonde` | blonde | girlfriend | Correct Quebec colloquial usage; not pan-French default. | Left unchanged because the deck appears to intentionally include Quebec French. |
| `data/french/words/b1/nouns/words_b1_nouns.ts` | `word_noun_chum` | chum | boyfriend | Correct Quebec colloquial usage; not pan-French default. | Left unchanged because the deck appears to intentionally include Quebec French. |
| `data/french/words/b1/prepositions/words_b1_terminal_prepositions.ts` | `word_preposition_suivant` | suivant | according to | Valid in formal/legal style, but `suivant` also means "following/next". | Left unchanged because the preposition entry is valid; revisit only if clues are not formal. |
| `data/french/words/c1/adjectives/words_c1_room_keys_adjectives.ts` | `word_adjective_securitaire` | sécuritaire | safe | Often Quebec usage; in European French `sûr` is the normal everyday "safe". | Left unchanged because the deck appears to intentionally include Quebec French. |

## Street Market Multi-Meaning Watchlist

Street Market looks much cleaner after removing padded multiple glosses. `Guetter` now has one good core gloss, `to watch for`; I would not restore a second meaning like "to spot".

| ID | French | Current gloss | My take |
| --- | --- | --- | --- |
| `word_verb_guetter` | guetter | to watch for | Looks right as a single gloss. It implies watching/waiting for someone or something, often with alertness. |
| `word_verb_reperer` | repérer | to locate | Looks right. Better than "to spot" for a learner deck unless the clue specifically means noticing visually. |
| `word_noun_echoppe` | échoppe | market stall | Good for the deck context. OQLF/GDT may surface technical senses, but ordinary dictionary usage supports a small shop/stall sense. |
| `word_noun_vitrine` | vitrine | shop window; display case | Genuine two-sense entry and useful in a market/treasure context. Keep both if both can appear in clues. |
| `word_noun_soupcon` | soupçon | suspicion; hint | Genuine two-sense entry. The "hint" sense is usually in phrases like "a hint/touch of". |
| `word_noun_eclat` | éclat | glint; fragment | Genuine multi-sense word. Both are plausible in treasure clues, but each clue should make the intended sense clear. |
| `word_adjective_ancien` | ancien | old; former | Genuine split: before the noun often "former", after the noun often "old/ancient". Worth keeping both. |
| `word_adjective_derobe` | dérobé | stolen; hidden | Both senses are real, but this is advanced and clue-dependent. Keep if the deck wants that ambiguity. |

## Low Priority Style Notes

- Expressions like `avoir faim` and `avoir soif` were changed from `hungry` and `thirsty` to `to be hungry` / `to be thirsty`.
- `bon voyage` was changed from `good journey` to `have a good trip`.
- `bonne journée` was changed from `good day` to `have a good day`.
- `aussitôt` was changed from `immediately` to `right away` to avoid duplicating `immédiatement`. Do not confuse it with the two-word homophone `aussi tôt`, which means "as early" and contrasts with `aussi tard`.
- Time expressions mix "one o'clock" and "one pm" style. Not wrong, just a consistency choice.
- Several Quebec words look intentional: `magasiner`, `dépanneur`, `char`, `stationnement`, `blonde`, `chum`, `sécuritaire`. If the product is explicitly Quebec-focused, keep them; if not, they should be marked as regional or swapped for broader equivalents.

## General Impression

Most current glosses are serviceable. The main risk is not fake multiple meanings everywhere; it is over-compressing a word into one English phrase when the first gloss has to carry the card. The Street Market cleanup moved in the right direction: keep real ambiguity where it helps the puzzle, but avoid adding second meanings just to make a card feel richer.
