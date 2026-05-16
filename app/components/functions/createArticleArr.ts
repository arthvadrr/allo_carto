const articles = ['le', 'la', "l\'", 'les', 'un', 'une', 'des'];

interface getFillerArticlesProps {
	amount: number;
	correctArticle: string;
}

export default function getFillerArticles({
	amount,
	correctArticle,
}: getFillerArticlesProps) {
	let articlesCopy = [...articles].filter(
		article => !(article === correctArticle),
	);

	if (amount <= articlesCopy.length) {
		let iterationCount = articlesCopy.length - amount + 1;
		let max = 100;
		let safety = 0;

		while (iterationCount > 0 && safety < max) {
			let randomPos = Math.floor(Math.random() * articlesCopy.length);
			safety += 1;

			if (articlesCopy[randomPos] !== 'DELETE') {
				articlesCopy[randomPos] = 'DELETE';
				iterationCount -= 1;
			}
		}
	}

	return [
		...articlesCopy.filter(article => article !== 'DELETE'),
		correctArticle,
	];
}
