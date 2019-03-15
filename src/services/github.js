import axios from 'axios';

export function fetchRepos(language, prevPage) {
    var encodedURI = window.encodeURI(
        'https://api.github.com/search/repositories?since='+prevPage
    );
    //https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories
    return axios
            .get(encodedURI)
            .then(function(response) {
                return response.data.items;
            });
}