import { urls } from "./constant.js";

const postsListado = document.querySelector(".posts");
const detallelPost = document.querySelector(".detail-post");
const loaderContainer = document.querySelector(".loader-container");

// Función que se encarga de pintar los posts en el DOM
async function blogPost() {
  // Mostrar el loader
  loaderContainer.classList.remove("hidden");

  try {
    const response = await fetch(urls.post);
    const data = await response.json();
    const { posts } = data;

    let html = "";
    posts.forEach((post) => {
      const { id, title, content, date } = post;
      html += `
      <article class="post">
      <a
        class="post-link"
        data-id=${id}
      >
        <header class="post-header">
          <h3 class="post-title">
           ${title}
          </h3>
        </header>
        <footer class="post-footer">
          <p>${content}</p>
          <p class="post-date">${formatDate(date)}  (${getFechaPublicacion(
        date
      )})</p>
        </footer>
      </a>
    </article>
      `;
    });
    postsListado.innerHTML = html;
    // Ocultar el loader
    loaderContainer.classList.add("hidden");

    const postLinks = document.querySelectorAll(".post-link");
    postLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = event.currentTarget.dataset.id;
        getDetallesPost(id);
      });
    });
  } catch (error) {
    console.error(error);
  }
}
// Función que se encarga de pintar el detalle de un post en el DOM
async function getDetallesPost(id) {
  loaderContainer.classList.remove("hidden");
  try {
    const res = await fetch(urls[id]);
    const data = await res.json();

    const { title, content, author } = data;
    detallelPost.innerHTML = "";

    detallelPost.innerHTML = `
        <header class="detail-post-header">
          <button class="back-button">
            <i class="fas fa-arrow-left fa-solid green"></i>
          </button>
          <h2>${title}</h2>
        </header>
        <p class="detail-post-content">
          ${content}
        </p>
        <p class="detail-post-author">${author}</p>
    `;
    // Ocultar el listado de posts y mostrar el detalle del post
    postsListado.classList.add("hidden");
    detallelPost.classList.remove("hidden");

    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", () => {
      postsListado.classList.remove("hidden");
      detallelPost.classList.add("hidden");
    });
    // Ocultar el loader
    loaderContainer.classList.add("hidden");
  } catch (error) {
    console.error(error);
  }
}

// Llamada a la función principal
blogPost();
