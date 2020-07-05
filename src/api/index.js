import axios from 'axios';

export const clientAxios = async (url, method, data) => {
  // const baseUrl = process.env.REACT_APP_URL_BASE;
  const baseUrl = 'https://caps-arg.herokuapp.com' + url;
  
  const response = await axios({
    url: baseUrl, 
    method,
    headers: {
      'Content-Type': 'Application/Json'
    },
    data
  });

  return response;
}