let memeButton = document.querySelector(".generate-the-meme");
let memeName = document.querySelector(".meme-name");
let memeImage = document.querySelector(".meme-image");
let memeAuthor = document.querySelector(".meme-author");

memeButton.addEventListener("click", () => {
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateDetails(data.url, data.title, data.author);
      });
  };
  generateMeme();
});

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeName.innerText = title;
  memeAuthor.innerText = author;
};
