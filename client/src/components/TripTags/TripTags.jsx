// ── TripTags ──────────────────────────────────────────────────────────
// Renders a trip's category tags; clicking one appends it to the search input

const TripTags = ({ tags, onTagClick }) => {
	const handleTagClick = (tag) => onTagClick(tag);

	return (
		<ul className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
			<li className="font-semibold text-gray-400">หมวด</li>
			{tags.map((tag) => (
				<li key={tag}>
					<button
						type="button"
						onClick={() => handleTagClick(tag)}
						className="rounded-full bg-gray-100 px-3 py-1 transition-colors duration-150 hover:bg-blue-100 hover:text-blue-600"
					>
						{tag}
					</button>
				</li>
			))}
		</ul>
	);
};

export default TripTags;
