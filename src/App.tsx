import { CanceledError } from "./services/api-client";
import { useEffect, useState } from "react";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const {users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...users];

    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);
    userService
      .create<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];

    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-border position-absolute top-50 start-50 translate-middle"></div>
      )}
      <button className="btn btn-primary mb-4" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
