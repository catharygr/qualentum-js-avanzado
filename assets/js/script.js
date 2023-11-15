import { urls } from "./constants.js";
const blogListado = document.querySelector(".blog-post");

async function blogPost() {
  try {
    const response = await fetch(urls.blogPost);
    console.log(response);
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

// Función que se encarga de pintar el detalle de un post en el DOM
async function getDetallePost(id) {
  try {
    const response = await fetch(urls[id]);
    const data = await response.json();
    const { title, content, author } = data;
  } catch (error) {
    console.log(error);
  }
}

blogPost();
