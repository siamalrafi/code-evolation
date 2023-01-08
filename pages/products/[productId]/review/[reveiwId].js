import { useRouter } from 'next/router';
import React from 'react';

const reveiwId = () => {
    const router = useRouter();
    const { reveiwId, productId } = router.query;

    return (
        <div>
            <h1>Products ={productId} || reveiwIdreveiwId {reveiwId}</h1>
        </div>
    );
};

export default reveiwId;