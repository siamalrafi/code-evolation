import Link from "next/link";

function PostList({ posts }) {
    console.log(posts.length);
    return (
        <div>
            <h1>This is the PostList.</h1>
            {
                posts?.map((post, i) => {
                    return (
                        <div key={i} >
                            <Link href={`/post/${post.id}`} passHref>
                                This is the Link.
                            </Link>
                            <h1>{post.title}</h1>
                        </div>

                    )
                })
            }

        </div>
    );
}

export async function getStaticProps(ctx) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}

export default PostList;