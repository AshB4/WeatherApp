const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'yout-key-here',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}