import {
	getWordRankDefinition,
	getWordRankSqlCountSelect,
} from '@/src/util/wordRanks';

describe('word rank helpers', () => {
	it.each([
		[-1, 'fnew'],
		[0, 'fnew'],
		[4, 'fnew'],
		[5, 'bronze'],
		[14, 'bronze'],
		[15, 'silver'],
		[29, 'silver'],
		[30, 'gold'],
		[59, 'gold'],
		[60, 'diamond'],
		[79, 'diamond'],
		[80, 'memorized'],
	])('maps score %i to %s', (score, expectedRank) => {
		expect(getWordRankDefinition(score).key).toBe(expectedRank);
	});

	it('builds SQL count columns from the shared thresholds', () => {
		expect(getWordRankSqlCountSelect('uw.correctCount')).toContain(
			'COALESCE(uw.correctCount, 0) >= 60 AND COALESCE(uw.correctCount, 0) < 80'
		);
		expect(getWordRankSqlCountSelect('uw.correctCount')).toContain(
			'COALESCE(uw.correctCount, 0) >= 80'
		);
	});
});
