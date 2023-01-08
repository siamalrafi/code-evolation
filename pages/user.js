import Users from './Users';


function user({ users }) {
    console.log(users);
    return (
        <div>
            <h1>This is the user list.</h1>
            {
                users?.map(user => <div key={user.id}>
                    <Users user={user}></Users>
                </div>
                )
            }

        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data);
    return {
        props: {
            users: data
        }
    }
}

export default user;