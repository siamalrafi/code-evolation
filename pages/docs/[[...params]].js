import { useRouter } from 'next/router';

const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);


    if (params.length === 3) {
        return <h1>this is the featurs {params[0]} and consents =={params[1]}</h1>
    } else if (params.length === 2) {
        return <h1>this is the featurs =={params[0]}  </h1>
    }


    return (
        <div>
            <h1>This is the home page of Docs.</h1>
        </div>
    );
};

export default Docs;