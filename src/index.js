import loadList from './list-component.js';
import './pagination-component.js';
import { updateSearchField } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import { makeSearchMovieURL } from './make-movie-search-url-component.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchField(queryOptions.searchTerm);

    const url = makeSearchMovieURL(queryOptions);
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadList(response.results);
        });
});



