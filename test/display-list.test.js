const test = QUnit.test;
function createLi(movie) {
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
test('create list item template', assert => {
    //arrange
    const movie = {
        title: 'Title 1',
        poster_path: 'https://sc01.alicdn.com/kf/HTB1ytcdLXXXXXaCXpXXq6xXFXXXK/Cute-kitten-cartoon-images-Cotton-Blend-Home.jpg_350x350.jpg',
        release_date: '1977-05-25'

    };
    const expected = `
    <li>
                <h2>Title 1</h2>
                <img src="https://sc01.alicdn.com/kf/HTB1ytcdLXXXXXaCXpXXq6xXFXXXK/Cute-kitten-cartoon-images-Cotton-Blend-Home.jpg_350x350.jpg">
                <p>1977-05-25</p>
            </li>`;
    //act
    const result = createLi(movie);
    //assert
    assert.htmlEqual(result, expected);
});