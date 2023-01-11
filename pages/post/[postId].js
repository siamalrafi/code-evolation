function postId({ post }) {

    return (
        <div>
            <h1>postId</h1>
            <h1>{post.title}</h1>
        </div>
    );
};

export async function getStaticPaths() {

    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
        ],
        fallback: false,
    };
}






export async function getStaticProps(ctx) {
    const { params } = ctx;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}

export default postId;