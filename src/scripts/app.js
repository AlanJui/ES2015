import Post from './models/Post';
import UI from './lib/UI'; 

Post.findAll()
	.then(UI.renderPosts)
	.catch((error) => {
		console.log(error);
	});


