const resolvers = {
  Query: {
    commits: (_, __, { dataSources }) => {
      return dataSources.graphAPI.getCommits();
    },
  },
  Commit: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.graphAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
