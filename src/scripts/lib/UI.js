class UI {

  static renderPosts(posts) {

		let elements = posts.map((post) => {
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
  	let target = document.querySelector('.container');
  	target.innerHTML = elements.join('');
  }

}

export default UI;
