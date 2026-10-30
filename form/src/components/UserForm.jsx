function UserForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <br />

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;