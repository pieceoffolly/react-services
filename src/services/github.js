import axios from 'axios';

export function fetchRepos(language, prevPage) {
    var encodedURI = window.encodeURI(
        'https://api.github.com/search/repositories?since='+prevPage
    );
    return axios
            .get(encodedURI)
            .then(function(response) {
                return response.data.items;
            });
}