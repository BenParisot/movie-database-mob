export function createLi(movie) {
    const template = document.createElement('template');
    const html = `
    <li>
                <h2>${movie.title}</h2>
                <img src="${movie.poster_path}">
                <p>${movie.release_date}</p>
            </li>`;
    template.innerHTML = html;
    return template.content;
}

export default function loadList(movies) {
    const movieListNode = document.getElementById('movie-list');
    movies.forEach(movie => {
        const movieLI = createLi(movie);
        movieListNode.appendChild(movieLI);
    });
}