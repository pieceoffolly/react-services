import _ from 'lodash';
import axios from 'axios';

class Services {
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
                title: _.get(repos, 'name'),
                owner_name: _.get(repos, 'owner.login'),
                owner_url: _.get(repos, 'owner.html_url'),
                image_url: _.get(repos, 'owner.avatar_url'),
                stars: _.get(repos, 'stargazers_count'),
                forks: _.get(repos, 'forks_count'),
                open_issues: _.get(repos, 'open_issues_count'),
                URL: _.get(repos, 'html_url')
            }
        });
    };

    async getQuestions(page) {
        const data = await axios
            .get(`https://api.stackexchange.com//2.2/questions?page=${page}&order=desc&sort=activity&site=stackoverflow`)
            .then(function(response) {
                return response.data
            })
        
        const items = _.get(data, 'items');
        return _.map(items, (question) => {
            return {
                id: _.get(question, 'question_id'),
                title: _.get(question, 'title'),    
                is_answered: _.get(question, 'is_answered'),         
                owner_id: _.get(question, 'owner.user_id'),
                owner_name: _.get(question, 'owner.display_name'),
                image_url: _.get(question, 'owner.profile_image'),
                score: _.get(question, 'score'),
                URL: _.get(question, 'link')
            }
        });
    };

    async getQuestionDetails(questionId){
        // const data = await axios
        //     .get(`https://api.stackexchange.com//2.2/questions?page=${page}&order=desc&sort=activity&site=stackoverflow`)
        //     .then(function(response) {
        //         return response.data
        //     })
    };

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

export default new Services();