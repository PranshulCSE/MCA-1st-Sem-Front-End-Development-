// Take an Example we have to fetch a user's data like comments, posts etc from a server one by one.
// For that we have to make multiple API calls one by one. So, to handle such scenarios we can use async await.

// That task are indepenedent of each other so we will see how async await works here.


async function details(){
    const [like,comments,posts]=await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1/likes').then(res=>res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(res=>res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>res.json())
    ]);
    console.log('Likes:', like);
    console.log('Comments:', comments);
    console.log('Posts:', posts);
}

details();