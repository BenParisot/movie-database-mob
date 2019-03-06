import { pageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let page = 1;
let totalPages = 5;

updatePaging(page);


export default function updatePaging(pagingOptions) {
    page = pagingOptions.page;
    totalPages = pagingOptions.totalPages;
    currentPageNode.textContent = page;
    totalPagesNode.textContent = totalPages;
}

const existingQuery = window.location.hash.slice(1);
const searchParams = new URLSearchParams(existingQuery);
let currentPage = searchParams.get('page');
previousButton.disabled = currentPage <= 1;

previousButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage--;
    previousButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
    window.location.hash = pageToQuery(existingQuery, currentPage);
});

nextButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage++;
    previousButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
    window.location.hash = pageToQuery(existingQuery, currentPage);
});