// ── SearchBar ─────────────────────────────────────────────────────────
// Controlled input for searching trips by keyword

const SearchBar = ({ searchValue, onSearchChange }) => {
	const handleInputChange = (event) => onSearchChange(event.target.value);

	return (
		<div className="mx-auto w-full max-w-2xl px-6">
			<input
				type="text"
				value={searchValue}
				onChange={handleInputChange}
				placeholder="หาที่เที่ยวแล้วไปกัน ..."
				className="w-full rounded-full border border-gray-200 px-6 py-3 text-center text-sm text-gray-700 shadow-sm transition-colors duration-150 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
			/>
		</div>
	);
};

export default SearchBar;
