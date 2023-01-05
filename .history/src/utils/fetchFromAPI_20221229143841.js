import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': 'c02756e886mshde23825e221d0a0p1d4ba6jsn390c219e716f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  