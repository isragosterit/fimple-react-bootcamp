import axios from 'axios';

// Asenkron fonksiyon olusturma
const getData = async (userId) => {
  try {
    // Users verilerini alma
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;
    
    // Posts verilerini alma
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;
    
    // Alinan verileri birlestirme
    const mergedData = { user: userData, posts: userPosts };
    
    // Verileri dondurme
    return mergedData;
    // Olasi hata durumunda hata bilgisini almak icin:
  } catch (error) {
    console.error(error);
  }
};

export default getData;