// console.log('Go Go Go!!!');

class Post  {

	static getFromServer(path) {
		return `response: ${path}`;
	}

  static findAll() {
  	console.log('find all posts...');
  	let list = this.getFromServer('posts');
  	console.log(`Fetch data: ${list}`);
  }
}

let UI = {
	renderPosts() {
		console.log('Render posts.....');
	}	
};


Post.findAll();

// Post.findAll()
// 	.then(UI.renderPosts);