export function createLi(movie) {
    const template = document.createElement('template');
    const replacementPoster = 'https://images-na.ssl-images-amazon.com/images/I/81wzLFT%2BxTL._SX425_.jpg';
    const movieSRC = `https://image.tmdb.org/t/p/w154${movie.poster_path}`;
    const html = `
    <li>
                <h2>${movie.title}</h2>
                <img src="${movie.poster_path ? movieSRC : replacementPoster}">
                <p>${movie.release_date}</p>
            </li>`;
    template.innerHTML = html;
    return template.content;
}

export default function loadList(movies) {
    const movieListNode = document.getElementById('movie-list');
    while(movieListNode.children.length > 0) {
        movieListNode.firstElementChild.remove();
    }
    movies.forEach(movie => {
        const movieLI = createLi(movie);
        movieListNode.appendChild(movieLI);
    });
}