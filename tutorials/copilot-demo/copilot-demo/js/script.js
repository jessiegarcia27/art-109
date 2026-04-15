// This file contains JavaScript code for handling dynamic interactions on the social media feed.

document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feedContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let postCount = 0;

    const posts = [
        {
            user: 'User1',
            content: 'This is my first post!',
            image: 'images/post1.jpg'
        },
        {
            user: 'User2',
            content: 'Loving the new features!',
            image: 'images/post2.jpg'
        },
        {
            user: 'User3',
            content: 'Can’t wait for the weekend!',
            image: 'images/post3.jpg'
        }
    ];

    function loadPosts() {
        const postsToLoad = posts.slice(postCount, postCount + 3);
        postsToLoad.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.user}</h3>
                <p>${post.content}</p>
                <img src="${post.image}" alt="${post.user}'s post" class="responsive-image">
            `;
            feedContainer.appendChild(postElement);
        });
        postCount += postsToLoad.length;

        if (postCount >= posts.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    loadMoreBtn.addEventListener('click', loadPosts);

    // Initial load
    loadPosts();
});