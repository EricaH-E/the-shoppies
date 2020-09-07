

export const filterSearchResults = (results, nominated) => {
    results.forEach(element => {
        element.isNominated = nominated.findIndex(n => element.imdbID === n.imdbID) === -1 ? false : true;
    });

    return results;
}

export const update_results = (update, data) => data.map(movie => movie.imdbID === update.imdbID ? update : movie);
