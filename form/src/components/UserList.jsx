function UserList({ users, onDelete }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}

          <button
            onClick={() => onDelete(user.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;    