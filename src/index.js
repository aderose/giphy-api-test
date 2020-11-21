import config from './config';

(function gifGenerator(doc) {
  let counter = 0;
  let gifs = [];

  // get gifs from giphy using the provided keyword
  function fetchGifs(keyword) {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${config.API_KEY}&q=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // load a new array of gifs
  function getNewGifs(keyword) {
    fetchGifs(keyword).then((data) => {
      gifs = data;
      counter = 0;
      doc.querySelector('img').src = gifs[counter].images.original.url;
    });
  }

  // listen for a form submit
  doc.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let keyword = doc.querySelector('#search').value;
    if (keyword === '') keyword = 'random';
    getNewGifs(keyword);
  });

  // update image when next button is clicked
  doc.querySelector('#next').addEventListener('click', () => {
    counter = (counter + 1) % gifs.length;
    doc.querySelector('img').src = gifs[counter].images.original.url;
  });

  getNewGifs('magic');
})(document);
