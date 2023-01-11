function postId({ post }) {

    return (
        <div>
            <h1>postId {post.id}</h1>
            <h1>{post.title}</h1>
        </div>
    );
};

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();

    const paths = data.map((post) => {
        return { params: { postId: `${post.id}` } }
    })

    return {
        paths,
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