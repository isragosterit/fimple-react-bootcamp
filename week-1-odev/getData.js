import axios from 'axios';

const getData = async () => {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;
    
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;
    
    const mergedData = { user: userData, posts: userPosts };
    
    return mergedData;
  } catch (error) {
    console.error(error);
  }
};

export default getData;