import { DeckDawnAtTheDropOff } from '@/data/french/decks/deck__dawn_at_the_drop_off';
import { DeckElevatorEpics } from '@/data/french/decks/deck__elevator_epics';
import { DeckLostRoomKeys } from '@/data/french/decks/deck__lost_room_keys';
import { DeckToTheGate } from '@/data/french/decks/deck__to_the_gate';
import { DeckTroubleInTheTerminal } from '@/data/french/decks/deck__trouble_in_the_terminal';
import type { CardDeck } from '@/src/components/CardDeck/cardDeckTypes';
import type { ImageSourcePropType } from 'react-native';

const airportOiseau = require('@/src/app/assets/images/places/airport-oiseau.jpg');
const hotelChance = require('@/src/app/assets/images/places/hotel-chance.jpg');

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
	image?: ImageSourcePropType;
}

/**
 * The idea is:
 * Chapter -> Place -> Situation (deck)
 */
export const deckAtlas: DeckAtlas = {
	chapters: [
		{
			id: 'a-very-french-travel-day',
			name: 'A Very French Travel Day',
			places: [
				{
					id: 'aeroport-oiseau',
					name: 'Aéroport Oiseau',
					image: airportOiseau,
					decks: [
						DeckDawnAtTheDropOff,
						DeckTroubleInTheTerminal,
						DeckToTheGate,
					],
				},
				{
					id: 'hotel-bonne-chance',
					name: 'Hôtel Bonne Chance',
					image: hotelChance,
					decks: [DeckLostRoomKeys, DeckElevatorEpics],
				},
			],
		},
	],
};
