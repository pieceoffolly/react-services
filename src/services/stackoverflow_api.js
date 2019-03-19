import _ from 'lodash';
import axios from 'axios';

export function getQuestions(page) {
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
}

export function getQuestionDetails(questionId){
    // const data = await axios
    //     .get(`https://api.stackexchange.com//2.2/questions?page=${page}&order=desc&sort=activity&site=stackoverflow`)
    //     .then(function(response) {
    //         return response.data
    //     })
}