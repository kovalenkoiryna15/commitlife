import React from 'react';

export default function CommitPoint({ commit }) {
  const { title, author } = commit;

  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
    </>
  );
}
