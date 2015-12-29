import Post from './models/Post';
import User from './models/User';
import UI from './lib/UI';

Post.findAll()
	.then(UI.renderPosts)
	.catch((error) => {
		console.log(error);
	});

User.findActiveUsers()
	.then(UI.renderActiveUsers)
	.catch((error) => {
		console.log(error);
	});