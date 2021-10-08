import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, QueryResult, CommitPoint } from '../components';

/* gql query */
export const COMMITS = gql`
  query Commits {
    commits {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

export default function Graph() {
  const { loading, error, data } = useQuery(COMMITS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.commits?.map((commit) => (
          <CommitPoint key={commit.id} commit={commit} />
        ))}
      </QueryResult>
    </Layout>
  );
}
