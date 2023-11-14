import { urls } from "./constants.js";
const blogListado = document.querySelector(".blog-post");

async function blogPost() {
  try {
    const response = await fetch(urls.blogPost);
    const data = await response.json();

    const { posts } = data;

    let html = "";
  } catch (error) {
    console.log(error);
  }
}

blogPost();
