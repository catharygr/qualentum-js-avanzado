import { urls } from "./constants.js";
const blogListado = document.querySelector(".blog-post");

async function blogPost() {
  try {
    const response = await fetch(urls.blogPost);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}

blogPost();
