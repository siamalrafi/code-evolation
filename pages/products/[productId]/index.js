import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter();
    const id = router.query.productId;
    console.log(id);
    return (
        <div>
            <h1>product id ==={id} </h1>
        </div>
    );
};

export default index;