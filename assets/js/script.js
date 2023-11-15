import { urls } from "./constant.js";
const blogListado = document.querySelector(".posts");
const detallePost = document.querySelector(".detalle-post");

async function blogPost() {
  try {
    const response = await fetch(urls.post);
    console.log(response);
    const data = await response.json();
    console.log(data);

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
    blogListado.innerHTML = html;

    const postLink = document.querySelectorAll(".post-link");
    postLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.dataset.id;
        getDetallePost(id);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

blogPost();
