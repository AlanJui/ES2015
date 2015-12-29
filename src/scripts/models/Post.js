import * as API from '../lib/API';

class Post {
	static findAll() {
		return API.fetch('posts');
	}
}

export default Post;