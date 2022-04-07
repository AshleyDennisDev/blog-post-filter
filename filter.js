//query selectors
let posts = [];
const maxDisplayLimit = 4;
const postContainer = document.querySelector('.post-container');


//create caards and update UI
function generatePost(post){
    const returnPostDate = (date) => `${
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
    'Dec'][date.getMonth()]} ${date.getDate()}, 
    ${date.getFullYear()}`
    
    const article= document.createElement('article');
    article.classList.add('post');
    article.innerHTML = ` 
    <div class="post__meta">
      <div class="post__tag--container">
      ${post.meta.tsgs.map((tag) => `<span class="post__tag">${tag}</span>`).join('')
    }
      </div>
      <p class="post__date">${returnPostDate(new Date(post.meta.date))}</p>
    </div>
    <h3 class="post__header">
    </h3>
    <div class="post__author">
      <div class="post__author--avatar" width="55"></div> 
      <div>
        <p class="post__author--name"></p>
        <p class="post__author--role"><small></small></p>
      </div>
    </div>
    <div class="post__body">
    </div>
    <a href="#" class="btn"></a>`;
    return article;
}

function loadPosts(){
    const frag = document.createDocumentFragment()
    posts.slice(0, maxDisplayLimit)
    .map((post) => frag.appendChild(generatePost(post)));
    postContainer.innerHTML = '';
    postContainer.appendChild(frag);
}


//fetch data
async function fetchPosts(){
    await('./posts.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Netowrk response was not ok');
        }
        return response.json()
    })
    .then((data) => {
        posts = (data[0]);
        loadPosts()
    })
    .catch((error) => {
        console.error('Thers is a problem with ypour fetch operation:', error)
    })
}
fetchPosts();


//update number of postd w/btn click

//filter for search