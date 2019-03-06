export function pageToQuery(existingQuery, newPage) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', newPage);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const searchTerm = searchParams.get('searchTerm');
    const page = parseInt(searchParams.get('page'));
    return {
        searchTerm: searchTerm,
        page: page,
        totalPages: 0
    };
}

export function searchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', '1');
    return searchParams.toString();
}

