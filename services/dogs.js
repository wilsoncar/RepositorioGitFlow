const axios = require('axios');

class DogsService {

  async getBreeds() {
    return await axios.get('https://dog.ceo/api/breeds/list/all') || [];
  }

}

module.exports = DogsService;