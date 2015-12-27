import URI from '../confnig';

let API = {fetch};

function fetch(path, errorMsg) {
	let url = `${URI}/${path}`;

	return new Promise((resolve, reject) => {
		  let request = new XMLHttpRequest();

		  request.open('GET', url);
		  request.send();

		  request.onload = () => {
		  	if (request.status === 200) {
		  		resolve(JSON.parse(request.response));
		  	}
		  };

		  request.onerror = (event) => {
		  	reject(new Error(`Error: ${errorMsg}`));
		  };
	});
}

export default API;