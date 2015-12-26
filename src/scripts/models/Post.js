import API from '../api';

class Post {

	static findAll() {
		return API.fetch('posts');
	}

}

export default Post;
