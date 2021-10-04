const { RESTDataSource } = require('apollo-datasource-rest');

class GraphAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = '';
  }
}

module.exports = GraphAPI;
