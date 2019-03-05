import movies from '../data/movies.js';
import loadList from './list-component.js';
import './pagination-component.js';
import { updateSearchField } from './search-component.js';
import { readFromQuery } from './hash-query.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
    updateSearchField(queryOptions.searchTerm);
});
loadList(movies);