// console.log('Go Go Go!!!');

class Post  {

	static getFromServer(path) {
		return `response: ${path}`;
	}

	static findAll() {

		return new Promise((resolve, reject) => {
			let url = 'http://localhost:5000/posts';
			let request = new XMLHttpRequest();

			request.open('GET', url, true);

			request.onload = () => {
				if (request.status >= 200 && request.status < 400) {
					resolve(JSON.parse(request.response));
				}
			};

			request.onerror = () => {
				reject(new Error('Something went wrong on the API'));
			};

			request.send();

		});
	}
}

let UI = {
	renderPosts(posts) {
		// console.log('Render posts.....');
		console.log(posts);
	}	
};

Post.findAll()
	.then(UI.renderPosts)
	.catch((error) => {
		console.log(error);
	});
