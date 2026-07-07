// ── SearchBar ─────────────────────────────────────────────────────────
// Controlled input for searching trips by keyword

const SearchBar = ({ searchValue, onSearchChange }) => {
	const handleInputChange = (event) => onSearchChange(event.target.value);

	return (
		<div className="mx-auto w-full max-w-md">
			<input
				type="text"
				value={searchValue}
				onChange={handleInputChange}
				placeholder="หาที่เที่ยวแล้วไปกัน ..."
				className="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-center text-sm text-gray-700 transition-colors duration-150 focus:border-gray-400 focus:bg-white focus:outline-none"
			/>
		</div>
	);
};

export default SearchBar;
