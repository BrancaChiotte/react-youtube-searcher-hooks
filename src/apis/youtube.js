import axios from 'axios';

const KEY = "AIzaSyC0v_gCh8MR070ZBPUGAwXDrU5hiwX4oJA";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
