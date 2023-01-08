import Link from "next/link";
import { useRouter } from "next/router";

const index = ({ productId = 100 }) => {


    return (
        <div>
            <Link href={'/products/1'}>
                <h1> Go to products/1</h1>
            </Link>

            <Link href={'/products/2'} replace>
                <h1> Go to products/2</h1>
            </Link>

            <Link href={`/products/${productId}`}>
                <h1> Go to products/{productId}</h1>
            </Link>

           
        </div>
    );
};

export default index;