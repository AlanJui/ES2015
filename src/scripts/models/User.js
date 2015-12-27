class User {

	static findRecent() {
		// return API.fetch('activeUsers');
		return new Promise((resolve, reject) => {
		  let request = new XMLHttpRequest();

		  request.open('GET', 'http://localhost:5000/activeUsers');
		  request.send();

		  request.onload = () => {
		  	if (request.status === 200) {
		  		// request.response 
		  		// = [{"name": "Sam","avatar": "avatar.jpg"},{"name": "Tyler","avatar": "avatar.jpg"},{"name": "Brook","avatar": "avatar.jpg"}]
		  		resolve(JSON.parse(request.response));
		  	}
		  };

		  request.onerror = (event) => {
		  	// console.log(`event = ${event}`);
		  	reject(new Error(`Error: can not fetch active users`));
		  };
		});
	}

}

export default User;

