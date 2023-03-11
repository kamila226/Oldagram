const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]


const main = document.getElementById("main");
for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `
                <div class="post">
                    <div class="user-info">
                        <img class="avatar" src="${posts[i].avatar}" alt="User avatar photo">
                        <div class="name-place">
                            <h1>${posts[i].name}</h1>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
                    <img class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s selfie" ondblclick="likePost(${i})">
                    <div class="body-container">
                        <div class="icons">
                            <img class="icon" class="like" id="like-${i}" src="images/icon-like.png" alt="Heart png icon" onclick="likePost(${i})">
                            <img class="icon" src="images/icon-comment.png" alt="Comment png icon">
                            <img class="icon" src="images/icon-dm.png" alt="Paper aircraft png icon">
                        </div>
                        <h1 class="likes" id="likes-${i}">${posts[i].likes} likes</h1>
                        <p class="username-caption"><span class="nickname">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
    `
}

function likePost(postIndex) {
    const likeIcon = document.getElementById(`like-${postIndex}`);
    if (posts[postIndex].isLiked === false) {
        posts[postIndex].likes += 1;
        likeIcon.src ="images/icon-like-liked.png";
        posts[postIndex].isLiked = true;

    } else {
        posts[postIndex].likes -= 1;
        likeIcon.src ="images/icon-like.png";
        posts[postIndex].isLiked = false;
    }
    const likesStr = document.getElementById(`likes-${postIndex}`);
    likesStr.textContent = posts[postIndex].likes + " likes";
}

