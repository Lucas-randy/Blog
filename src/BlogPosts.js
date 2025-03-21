import axios from 'axios';
import { useEffect, useState } from 'react';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts', { adapter: require('axios/lib/adapters/xhr') })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des publications', error);
            });
    }, []);

    return (
        <div>
            <h1>Publications du blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;
