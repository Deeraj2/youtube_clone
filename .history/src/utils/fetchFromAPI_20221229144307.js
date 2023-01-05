import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    url: BASE_URL,
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': pr,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  