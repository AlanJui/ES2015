class UI {

  static renderPosts(posts) {

		let html = posts.map((post) => {
  		let {title, lastReply} = post;
  		// console.log(post);
  		// console.log(`title = ${title}`);
  		// console.log(`lastReply = ${lastReply}`);
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

  	// 放置的位置： .container
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
