import API from '../lib/API';

class User {

	static findRecent() {
		API.fetch('activeUsers', 'can not fetch Active Users');
	}

}

export default User;

