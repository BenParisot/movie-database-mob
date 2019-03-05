const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let currentPage = 1;
let totalPages = 5;

updatePaging(currentPage);

previousButton.addEventListener('click', () => {
    currentPage--;
    updatePaging(currentPage);
});

nextButton.addEventListener('click', () => {
    currentPage++;
    updatePaging(currentPage);
});

function updatePaging(currentPage) {
    previousButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage === totalPages;
    currentPageNode.textContent = currentPage;
}
