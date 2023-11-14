import { urls } from "./constants.js";
const blogListado = document.querySelector(".blog-post");

async function blogPost() {
  try {
    const response = await fetch(urls.blogPost);
    const data = await response.json();

    const { posts } = data;

    let html = "";
    posts.forEach((post) => {
      const { id, title, content, date } = post;
      html += `
      <article class="post"><a class="post-link" data-id=${id}>
					<header class="post-header">
						<h3 class="post-title">${title}</h3>
					</header>
					<footer class="post-footer">
						<p class="post-content">${content}{</p>
						<p class="post-date">${date}</p>
					</footer>
				</a></article>
      `;
    });
  } catch (error) {
    console.log(error);
  }
  blogListado.innerHTML = html;
}

blogPost();
