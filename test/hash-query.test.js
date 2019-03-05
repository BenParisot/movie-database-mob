import { searchToQuery, pageToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

test('add search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    const expected = 'searchTerm=star+wars&page=1';
    //act
    const result = searchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});

test('add search to existing query', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const searchTerm = 'harry potter';
    const expected = 'searchTerm=harry+potter&page=1';

    //act
    const result = searchToQuery(existingQuery, searchTerm);

    //assert
    assert.equal(result, expected);
});

test('add page number to existing query', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const newPage = '2';
    const expected = 'searchTerm=star+wars&page=2';
    //act
    const result = pageToQuery(existingQuery, newPage);
    //assert
    assert.equal(result, expected);
});




test('reads options from query', assert => {

    //arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const expected = {
        searchTerm: 'star wars',
        page: 1
    };
    //act
    const result = readFromQuery(existingQuery);
    //assert
    assert.deepEqual(result, expected);
});