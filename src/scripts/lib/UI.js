class UI {

  static renderPosts(posts) {

		let html = posts.map((post) => {
  		let {title, lastReply} = post;
  		return `
				<article class="post">
		      <h2 class="post-title">
		        ${title}
		      </h2>
		      <p class="post-meta">
		        ${lastReply}
		      </p>
		    </article>
  		`;
  	});

  	let element = document.querySelector('.container');
  	element.innerHTML = html.join('');
  }

  static renderActiveUsers(users) {
  	let html = users.map((user) => {
  		let {avatar, name} = user;
  		return `
        <div class="active-avatar">
          <img width="54" src="assets/images/${avatar}">
          <h5 class="post-author">${name}</h5>
        </div>
  		`;
  	});
  	
  	let element = document.querySelector('.sidebar-content');
  	element.innerHTML = html.join('');
  }
}

export default UI;
