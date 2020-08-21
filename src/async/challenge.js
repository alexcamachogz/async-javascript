const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
	try {
		// number of characters
		const data = await fetchData(url_api);
		// character information
		const character = await fetchData(`${API}${data.results[0].id}`);
		// character dimension
		const origin = await fetchData(character.origin.url);

		console.log(data.info.count);
		console.log(character.name);
		console.log(origin.dimension);
	} catch {
		console.error(error);
	}
}

console.log('Before');
anotherFunction(API);
console.log('After');