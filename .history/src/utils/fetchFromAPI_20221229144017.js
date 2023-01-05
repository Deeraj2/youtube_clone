import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/videos';

const options = {
    url: BASE_URL,
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': 'c02756e886mshde23825e221d0a0p1d4ba6jsn390c219e716f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  