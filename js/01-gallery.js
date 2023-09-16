import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const bigImUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
      src="${bigImUrl}"
      alt="${event.target.alt}"
    />`);
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

// other variant
// console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");

// const makeGalleryCard = ({ preview, original, description }) =>
//   `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
// const markup = galleryItems.map((element) => makeGalleryCard(element)).join("");

// galleryEl.insertAdjacentHTML("afterbegin", markup);

// galleryEl.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const largeImageUrl = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${largeImageUrl}"  alt="${event.target.alt}">`);
//   instance.show();
// });
