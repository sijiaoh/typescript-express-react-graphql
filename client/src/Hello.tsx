import React from 'react';
import {useQuery, gql} from '@apollo/client';

export const Hello = () => {
  const {loading, error, data} = useQuery(gql`
    {
      hello
    }
  `);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return <div className={Hello.name}>{data.hello}</div>;
};
