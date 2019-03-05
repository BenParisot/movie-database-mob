import { searchToQuery } from './hash-query.js';
const searchFormNode = document.getElementById('search-form');
const searchTermInput = searchFormNode.querySelector('input');

searchFormNode.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = searchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchField(searchTerm) {
    searchTermInput.value = searchTerm;
}
