import * as config from '../config';

export function fetch(path) {

	return new Promise((resolve, reject) => {
		let url = `${config.BASE_URI}/${path}`;
	  let request = new XMLHttpRequest();

	  request.open('GET', url);
	  request.send();

	  request.onload = () => {
	  	if (request.status === 200) {
	  		resolve(JSON.parse(request.response));
	  	}
	  };

	  request.onerror = (event) => {
	  	reject(new Error(`API Error: can not read ${path}`));
	  };
	});

}
