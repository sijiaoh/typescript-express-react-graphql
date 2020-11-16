import React from 'react';
import {gql} from '@apollo/client';
import {useHelloQuery} from './generated/graphql';

gql`
  query Hello {
    hello {
      str
      date
    }
  }
`;

export const Hello = () => {
  const {loading, error, data} = useHelloQuery();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className={Hello.name}>
      <div>
        <div>str={data!.hello.str}</div>
        <div>date={data!.hello.date}</div>
      </div>
    </div>
  );
};
