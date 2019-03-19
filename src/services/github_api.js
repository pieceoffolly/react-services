import _ from 'lodash';
import axios from 'axios';

export async function getReposes(language, page) {   
    const data = await axios
         .get(`https://api.github.com/search/repositories?page=${page}&order=desc&q=stars:>1+language:${language}&sort=stars&type=Repositories`)
         .then(function(response) {
            return response.data;
         })
         .catch((error) => {
            throw new Error(`Github API request failed: ` + error);
         });


    const items = _.get(data, 'items');
    return _.map(items, (repos) => {
        return {
            id: _.get(repos, 'id'),
            name: _.get(repos, 'name'),
            owner_name: _.get(repos, 'owner.login'),
            owner_url: _.get(repos, 'owner.html_url'),
            image_url: _.get(repos, 'owner.avatar_url'),
            stars: _.get(repos, 'stargazers_count'),
            forks: _.get(repos, 'forks_count'),
            open_issues: _.get(repos, 'open_issues_count'),
            URL: _.get(repos, 'html_url')
        }
    })
};

export async function getReposesCount(language) {
    const data = await axios
         .get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&type=Repositories`)
         .then(function(response) {
            return response.data;
         })
         .catch((error) => {
            throw new Error(`Github API request failed: ` + error);
         });

    return _.get(data, "total_count")
}