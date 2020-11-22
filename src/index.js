import config from './config';

(function gifGenerator(doc) {
  let counter = 0;
  let gifs = [];

  // get gifs from giphy using the provided keyword
  async function fetchGifs(keyword) {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${config.API_KEY}&q=${keyword}`
    );
    const responseData = await response.json();
    return responseData.data;
  }

  // load a new array of gifs
  async function getNewGifs(keyword) {
    try {
      gifs = await fetchGifs(keyword);
    } catch (err) {
      console.log(err.message);
    }
    counter = 0;
    doc.querySelector('img').src = gifs[counter].images.original.url;
  }

  // listen for a form submit
  doc.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = doc.querySelector('#search').value;
    if (keyword === '') return;
    getNewGifs(keyword);
  });

  // update image when next button is clicked
  doc.querySelector('#next').addEventListener('click', () => {
    counter = (counter + 1) % gifs.length;
    doc.querySelector('img').src = gifs[counter].images.original.url;
  });

  getNewGifs('magic');
})(document);
