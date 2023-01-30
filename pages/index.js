import React from 'react';
import Link from 'next/link'

const index = () => {
  return (
    <div>
      
      <h1>This is the index.js page</h1>

      <hr /><hr /><hr />

      <Link href='/user'>
        <h1>This is the users.</h1>
      </Link>
      <hr /><hr /><hr />
      <Link href='/post'>
        <h1>This is the post.</h1>
      </Link>
    </div>
  );
};

export default index;