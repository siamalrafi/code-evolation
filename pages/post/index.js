import Link from 'next/link'

function PostList({ posts }) {
    console.log(posts);
    return (
        <div>
            <h1> Post list</h1>
            {
                posts.map(post => {
                    return (
                        <div>
                            <Link href={`/post/${post?.id}`}>
                                <h1>This is the post {post.id}</h1>

                                Link</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}

export default PostList;