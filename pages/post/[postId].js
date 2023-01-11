import { useRouter } from "next/router";

function postId({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1> loading.....</h1>
    }

    return (
        <div>
            <h1>postId {post.id}</h1>
            <h1>{post.title}</h1>
        </div>
    );
};


export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '2' } },
        ],
        fallback: true,
    };
};

export async function getStaticProps(ctx) {
    const { params } = ctx;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: data
        }
    }
}

export default postId;