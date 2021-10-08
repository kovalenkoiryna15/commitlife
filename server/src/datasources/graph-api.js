const { RESTDataSource } = require('apollo-datasource-rest');

class GraphAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = '';
  }

  getCommits() {
    return this.get('commits');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = GraphAPI;
