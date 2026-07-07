// ── TripTags ──────────────────────────────────────────────────────────
// Renders a trip's category tags; clicking one appends it to the search input

const TripTags = ({ tags, onTagClick }) => {
	const handleTagClick = (tag) => onTagClick(tag);

	return (
		<ul className="flex flex-wrap gap-1.5">
			{tags.map((tag) => (
				<li key={tag}>
					<button
						type="button"
						onClick={() => handleTagClick(tag)}
						className="rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-500 transition-colors duration-150 hover:bg-gray-900 hover:text-white"
					>
						{tag}
					</button>
				</li>
			))}
		</ul>
	);
};

export default TripTags;
