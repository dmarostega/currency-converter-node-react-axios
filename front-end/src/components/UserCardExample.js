export default function UserCard({ user }) {
    return (
      <div className="border p-4 rounded mb-2 shadow">
        <h3 className="text-lg font-bold">{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
    );
  }