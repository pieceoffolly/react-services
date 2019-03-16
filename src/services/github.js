import _ from 'lodash';
import axios from 'axios';

class Github {
    async getReposes(language, page) {
        var encodedURI = window.encodeURI(
            //'https://api.github.com/search/repositories?since='+prevPage
            'https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories'
        );
        //https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories
        
        // const data = await axios
        //      .get(`https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories`)
        //      .then(function(response) {
        //          return response.data.items;
        //      });
        const response = await fetch('https://api.github.com/search/repositories?page=1&order=desc&q=stars:>1+language:All&sort=stars&type=Repositories', {
            method: 'GET',
            headers: {
              Accept: 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
          }
          const data = await response.json();
          const items = _.get(data, 'items');
        return _.map(items, (repos) => {
            // const owner = _.get(data, 'items.owner')
            return {
                name: _.get(repos, 'name'),
                owner: _.get(repos, 'owner.login'),
                stars: _.get(repos, 'stargazers_count'),
                URL: _.get(repos, 'url')
            }
        });
    }
}

export default new Github();