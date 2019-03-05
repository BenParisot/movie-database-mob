const searchMovieURL = 'https://api.themoviedb.org/3/search/movie?';
const apiKey = '9b04e9b50b5df524106f0c1b348dbfb5';

export function makeSearchMovieURL(queryOptions) {
    const url = new URL(searchMovieURL);
    url.searchParams.set('api_key', apiKey);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}