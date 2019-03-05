import { createLi } from '../src/list-component.js';
const test = QUnit.test;

test('create list item template', assert => {
    //arrange
    const movie = {
        title: 'Title 1',
        poster_path: 'https://image.tmdb.org/t/p/w154https://sc01.alicdn.com/kf/HTB1ytcdLXXXXXaCXpXXq6xXFXXXK/Cute-kitten-cartoon-images-Cotton-Blend-Home.jpg_350x350.jpg',
        release_date: '1977-05-25'

    };
    const expected = `
    <li>
                <h2>Title 1</h2>
                <img src="https://image.tmdb.org/t/p/w154https://image.tmdb.org/t/p/w154https://sc01.alicdn.com/kf/HTB1ytcdLXXXXXaCXpXXq6xXFXXXK/Cute-kitten-cartoon-images-Cotton-Blend-Home.jpg_350x350.jpg">
                <p>1977-05-25</p>
            </li>`;
    //act
    const result = createLi(movie);
    //assert
    assert.htmlEqual(result, expected);
});