const API_TOKEN = "4a7ce9eb85552b391ad5b437d16257a0"

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getImageFromApi(name) {
      return 'https://image.tmdb.org/t/p/w300' + name
  }