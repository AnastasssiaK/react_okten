export const User = ({user}) => {
    return (
        <div>
            <div>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
                <p>{user.name}</p>
            </div>
        </div>
    );
}

