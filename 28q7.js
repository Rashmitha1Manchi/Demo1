function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching user data...");
            if (userId) {
                resolve({ userId, name: "John Doe" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}
function fetchPostsForUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching posts for ${user.name}...`);
            if (user.userId) {
                resolve([
                    { postId: 1, title: "First post" },
                    { postId: 2, title: "Second post" },
                ]);
            } else {
                reject("No posts found for user");
            }
        }, 1000);
    });
}
function fetchCommentsForPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching comments for post: "${post.title}"...`);
            resolve([
                { commentId: 1, text: "Great post!" },
                { commentId: 2, text: "Thanks for sharing!" },
            ]);
        }, 1000);
    });
}
fetchUserData(1) 
    .then(user => {
        return fetchPostsForUser(user); 
    })
    .then(posts => {
        return fetchCommentsForPost(posts[0]);  
    })
    .then(comments => {
        console.log("Comments fetched:", comments);
    })
    .catch(error => {
        console.log("Error:", error);
    });
