import axios from "axios";


const getUser = async() => {
    try {
        const response = await axios.get('https://api.github.com/users');
        return response.data;
      } catch (error) {
        console.error(error);
      }
  }

export default getUser