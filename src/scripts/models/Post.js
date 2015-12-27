import API from '../lib/API';

class Post  {

	static findAll() {
		API.fetch('posts', 'can not fetch posts');
	}
}

export default Post;
