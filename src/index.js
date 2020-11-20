const img = document.querySelector('img');

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=fj5ziE4ILPricdqb0WywRB5AbMGrVXLn&s=cats'
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    img.src = response.data.images.original.url;
  })
  .catch((e) => {
    console.log(e);
  });
