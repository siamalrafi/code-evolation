function post() {
    return (
        <div>
            <h1>This is the single Post.</h1>




        </div>
    );
};


export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: 1 } }, // See the "paths" section below
            { params: { postId: 1 } }, // See the "paths" section below
            { params: { postId: 1 } }, // See the "paths" section below
        ],
        fallback: false,
    };
}

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();


    return {
        props: {
            data: null
        }
    }
}

export default post;