import _ from 'lodash';
import axios from 'axios';

class Github {
    async getReposes(language, page) {   
        const data = await axios
             .get(`https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories`)
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
                owner: _.get(repos, 'owner.login'),
                avatar_url: _.get(repos, 'owner.avatar_url'),
                stars: _.get(repos, 'stargazers_count'),
                URL: _.get(repos, 'url')
            }
        });
    }

    // async getReposDetails(reposeId){
    //     const data = await axios
    //          .get(`https://api.github.com/repositories/`+{reposeId})
    //          .then(function(response) {
    //             return response.data;
    //          })
    //          .catch((error) => {
    //             throw new Error(`Github API request failed: ` + error);
    //          });

    //     // const owner = _.get(data, 'owner');
    //     return _.map(data, (reposDetails) => {
    //         return {
    //             id: _.get(reposDetails, 'id'),
    //             name: _.get(reposDetails, 'name'),
    //             owner: _.get(reposDetails, 'owner.login'),
    //             avatar_url: _.get(reposDetails, 'owner.avatar_url'),
    //             stars: _.get(reposDetails, 'stargazers_count'),
    //             URL: _.get(reposDetails, 'url')
    //         }
    //     });
    // }
}

export default new Github();