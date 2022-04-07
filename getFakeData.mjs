import fs from 'fs'
import faker from 'faker'
import {phrase, sentence, paragraph} from 'coder-ipsum'

let posts = [];
const NUMBER_OF_POSTS = 100;
let userID = 1;

function Post() {
    this.user  = faker.helpers.createCard()

}

for (let i=0; i<NUMBER_OF_POSTS; i++) {
    posts.push(new Post());
}

fs.writeFile('./posts.json', JSON.stringify(posts, null, 2), err => {
    if(err){
        console.log('There was an error');
    } else {
        console.log('File successfully written')
    }
})
