let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]
let text = ""
const postsContainer = document.querySelector(".posts-container")
let postsOld = JSON.parse(localStorage.getItem("posts"))
if(postsOld) {
    posts = postsOld
}

function renderPosts() {
    postsContainer.innerHTML = ""
    let text = ""
    for(let i=0; i<posts.length; i++) {
        if(posts[i].liked === true) {
            text += 
            `
            <div class="post">
            
                    <div class="post-header">
                        <img src="${posts[i].avatar}" class="dp post-dp">
                        <div class="username-location">
                            <h3>${posts[i].username}</h3>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
            
                    <img src="${posts[i].post}" class="post-image">
            
                    <div class="action-panel">
                        <button class="like-btn" id="like-btn-${i}" onclick="likePost(${i})"> <img src="images/icon-redheart.png" class="actions-img"> </button>
                        <img src="images/icon-comment.png" class="actions-img">
                        <img src="images/icon-dm.png" class="actions-img">
                    </div>
            
                    <h3>${posts[i].likes}</h3>
                    <p> <span style="font-weight: bold">${posts[i].username}</span> ${posts[i].comment} </p>
            
                </div>
            `
        }
        else {
            text += 
            `
            <div class="post">
            
                    <div class="post-header">
                        <img src="${posts[i].avatar}" class="dp post-dp">
                        <div class="username-location">
                            <h3>${posts[i].username}</h3>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
            
                    <img src="${posts[i].post}" class="post-image">
            
                    <div class="action-panel">
                        <button class="like-btn" id="like-btn-${i}" onclick="likePost(${i})"> <img src="images/icon-heart.png" class="actions-img"> </button>
                        <img src="images/icon-comment.png" class="actions-img">
                        <img src="images/icon-dm.png" class="actions-img">
                    </div>
            
                    <h3>${posts[i].likes}</h3>
                    <p> <span style="font-weight: bold">${posts[i].username}</span> ${posts[i].comment} </p>
            
                </div>
            `
        }
    }
    postsContainer.innerHTML = text
    localStorage.setItem("posts", JSON.stringify(posts))
}

renderPosts()

function likePost(index) {
    if(posts[index].liked === true) {
        posts[index].liked = false
        posts[index].likes--
    }
    else {
        posts[index].likes += 1
        posts[index].liked = true
    }
    renderPosts()
}