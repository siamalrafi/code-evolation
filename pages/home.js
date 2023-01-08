import { useRouter } from 'next/router';
import React from 'react';

const home = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log('placing product');
        return router.replace('/products')

    }

    return (
        <div>
            <h1>homehomehome</h1>

            <button type="button" onClick={handleClick}>
                Click me
            </button>
        </div>
    );
};

export default home;