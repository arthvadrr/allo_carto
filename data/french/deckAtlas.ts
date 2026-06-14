import { DeckDawnAtTheDropOff } from '@/data/french/decks/deck__dawn_at_the_drop_off';
import { DeckElevatorEpics } from '@/data/french/decks/deck__elevator_epics';
import { DeckLostRoomKeys } from '@/data/french/decks/deck__lost_room_keys';
import { DeckToTheGate } from '@/data/french/decks/deck__to_the_gate';
import { DeckTroubleInTheTerminal } from '@/data/french/decks/deck__trouble_in_the_terminal';
import type { CardDeck } from '@/src/components/CardDeck/cardDeckTypes';

/**
 * Typing
 */
export interface DeckAtlas {
	chapters: DeckChapter[];
}

export interface DeckChapter {
	id: string;
	name: string;
	places: DeckPlace[];
}

export interface DeckPlace {
	id: string;
	name: string;
	decks: CardDeck[];
}

/**
 * The idea is:
 * Chapter -> Place -> Situation (deck)
 */
export const FrenchDeckAtlas: DeckAtlas = {
	chapters: [
		{
			id: 'welcome-to-airport-oiseau',
			name: 'Welcome to Airport Oiseau',
			places: [
				{
					id: 'aeroport-oiseau',
					name: 'Aéroport Oiseau',
					decks: [
						DeckDawnAtTheDropOff,
						DeckTroubleInTheTerminal,
						DeckToTheGate,
					],
				},
			],
		},
		{
			id: 'hotel-bonne-chance',
			name: 'Hotel Bonne Chance',
			places: [
				{
					id: 'hotel-bonne-chance',
					name: 'Hôtel Bonne Chance',
					decks: [DeckLostRoomKeys, DeckElevatorEpics],
				},
			],
		},
	],
};
