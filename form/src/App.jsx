
import './App.css'

import { useState } from "react";

import UserForm from "./components/UserForm";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
    };

    setUsers((prev) => [...prev, newUser]);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };


  const filteredUsers = users.filter((user) => {
    const searchValue = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>User Management</h1>

      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <hr />

      <h2>Users</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <br />
      <br />

      <UserList
        users={filteredUsers}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;