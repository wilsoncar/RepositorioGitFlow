const MongoLib = require('../lib/mongo');

class UserService {

  constructor() {
    this.collection = 'dogs';
    this.mongoDB = new MongoLib();
  }

  async getUser(id) {
      const user = await this.mongoDB.getUser(this.collection, id);
      return user || {};
  }
  
}

module.exports = UserService;