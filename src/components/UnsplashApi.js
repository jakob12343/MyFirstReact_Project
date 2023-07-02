import axios from 'axios'

const url ='https://api.unsplash.com/search/photos'

const searchImages = async(searchTag, page = 1, per_page = 10) =>{

  const results = await axios.get(url,{
    headers:{
      Authorization: 'Client-ID RqqPhoYyh_JC4hL2x_TUk7-OuAkrhcgZXHLwzblk7vA'
    },
    params:{
      query: searchTag,
      per_page,
      page
    }
    })
console.log(results);
  return  results.data.results;
}

export default searchImages