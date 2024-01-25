const article = document.querySelector("#post");
const postDetailsBtn = document.querySelector("#post-details-BTN");
const postImg = document.querySelector("img");

postDetailsBtn.addEventListener("click", function () {
    alert(`The book author is: ${article.dataset.author} and the category is: ${article.dataset.category}`)
});

postImg.addEventListener("click", function () {
    window.open(postImg.dataset.fullsize, "_self");
})
