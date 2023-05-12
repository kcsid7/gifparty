const gifForm = $("#gif-search-input");
const gifList = $("#list-of-gifs");

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const createDivImg = (gifs) => {
  if (gifs.data.length !== 0) {
    const newDiv = $("<div>");
    const newImage = $("<img>", {
      src: gifs.data[Math.floor(Math.random() * gifs.data.length)].images.original.url,
    });
    gifList.append(newDiv).append(newImage);
  } else {
    alert("No Gifs Found!");
  }
}

$(".gif-form").on("submit", async function(e) {
    e.preventDefault();
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: gifForm.val(),
            api_key: API_KEY
            }
        });
    console.log(response.data);
    createDivImg(response.data);
    gifForm.val("");
});


$("#remove").on("click", function() {
    gifList.empty();
});