import fs from 'fs'
import faker from 'faker'
import {phrase, sentence, paragraph} from 'coder-ipsum'

let posts = [];
const NUMBER_OF_POSTS = 10;
let userID = 1;

function Post() {
    this.user = {
        id: userID++,
        name:[
            {
                firstName: faker.name.firstName()
            },
            {
                lastName: faker.name.lastName()
            }
        ],
    },
    this.jobTitle= faker.name.jobTitle(),
    this.avatar= faker.image.avatar(),
    this.summary= sentence(30),
    this.title = phrase(4),
    this.meta = {
        tags: [
            faker.random.words()
        ]
    },
    this.url = faker.internet.url()

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
