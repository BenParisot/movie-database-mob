const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let page = 1;
let totalPages = 5;

updatePaging(page);

previousButton.addEventListener('click', () => {
    page--;
    updatePaging(page);
});

nextButton.addEventListener('click', () => {
    page++;
    updatePaging(page);
});

export default function updatePaging(queryOptions) {
    page = queryOptions.page;
    totalPages = queryOptions.totalPages;
    currentPageNode.textContent = page;
    totalPagesNode.textContent = totalPages;
}


// previousButton.disabled = page <= 1;
// nextButton.disabled = page === totalPages;