import React from 'react';
import {useQuery, gql} from '@apollo/client';

export const Hello = () => {
  const {loading, error, data} = useQuery(gql`
    {
      hello {
        str
        date
      }
    }
  `);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className={Hello.name}>
      <div>
        server
        <div>str={data!.hello.str}</div>
        <div>date={data!.hello.date}</div>
      </div>
    </div>
  );
};
