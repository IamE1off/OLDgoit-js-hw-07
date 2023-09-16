import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// link to the list
const list = document.querySelector(".gallery");
// adding to html
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// delegating
list.addEventListener("click", handleClick);

// creating markup
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    )
    .join("");
}
