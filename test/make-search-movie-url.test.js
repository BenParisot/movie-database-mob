const test = QUnit.test;
const searchMovieURL = 'https://api.themoviedb.org/3/movie/550?api_key=9b04e9b50b5df524106f0c1b348dbfb5';

function makeSearchMovieURL(queryOptions) {
    const url = new URL(searchMovieURL);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}

test('includes query and page in seach movie url', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 2
    };
    const expected = 'https://api.themoviedb.org/3/movie/550?api_key=9b04e9b50b5df524106f0c1b348dbfb5&language=en-us&include_adult=false&query=star+wars&page=2';
    //act
    const actual = makeSearchMovieURL(queryOptions);
    //assert
    assert.equal(actual, expected);
});