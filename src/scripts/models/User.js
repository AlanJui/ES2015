import * as API from '../lib/API';

class User {

	static findActiveUsers() {
		return API.fetch('activeUsers');
	}

}

export default User;