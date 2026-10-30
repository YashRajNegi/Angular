
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name or email"
    />
  );
}

export default SearchBar;