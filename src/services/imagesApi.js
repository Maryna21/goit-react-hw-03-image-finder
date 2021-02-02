import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: '19250465-3ecaba10f96f1a4c0424b71f3',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
}
const getImg = async (query, page = 1) => {
    // console.log('query', query);
    // console.log('page', page );
    try {
        const { data } = await axios.get('', {
            params: { q: query, page },
        })
        return {
            hits: data.hits,
            totalHits: data.totalHits,
        };
    }
    catch (error) {
        console.log(error);
        return {
            hits: [],
            totalHits: 0,
        }
    }
}

 const api = {
    getImg
}
export default api;




// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '19250465-3ecaba10f96f1a4c0424b71f3';

//  function fetchImages(query, page = 1) {
//     return fetch(`${BASE_URL}?q=${query}&page={page}&key=${API_KEY}&&image_type=photo&orientation=horizontal&per_page=12`)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                     }
                  
//                 })
//  }
//  const api = {
//     fetchImages
// }
// export default api;