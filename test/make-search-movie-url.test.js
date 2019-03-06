import { makeSearchMovieURL } from '../src/make-movie-search-url-component.js';

const test = QUnit.test;

test('includes query and page in seach movie url', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 2
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=9b04e9b50b5df524106f0c1b348dbfb5&language=en-us&include_adult=false&query=star+wars&page=2';
    //act
    const actual = makeSearchMovieURL(queryOptions);
    //assert
    assert.equal(actual, expected);
});