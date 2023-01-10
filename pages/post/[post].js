function singlePost() {
    return (
        <div>
            Enter
        </div>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            {
                params: { id: '2' },
            },
            {
                params: { id: '2' },
            },
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

export default singlePost;