export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
