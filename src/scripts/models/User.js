import API from '../api';

class User {

	static findRecent() {
		return API.fetch('activeUsers');
	}

}

export default User;
