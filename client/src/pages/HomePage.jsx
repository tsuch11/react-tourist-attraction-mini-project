// ── HomePage ──────────────────────────────────────────────────────────
// Landing page: search input + list of trips fetched from the server
// แก้ไขได้: SEARCH_DEBOUNCE_MS

import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import TripList from "../components/TripList/TripList";
import useDebounce from "../hooks/useDebounce";
import useTrips from "../hooks/useTrips";

const SEARCH_DEBOUNCE_MS = 300;

const HomePage = () => {
	// ── Hooks ──────────────────────────────────────────────────────────
	const [searchValue, setSearchValue] = useState("");
	const debouncedSearchValue = useDebounce(searchValue, SEARCH_DEBOUNCE_MS);
	const { trips, isLoading } = useTrips(debouncedSearchValue);

	// ── Handlers ───────────────────────────────────────────────────────
	const handleTagClick = (tag) => {
		const currentTags = searchValue.trim().split(" ").filter(Boolean);
		const hasTagAlready = currentTags.includes(tag);
		const nextSearchValue = hasTagAlready ? searchValue : [...currentTags, tag].join(" ");

		setSearchValue(nextSearchValue);
	};

	// ── Render ─────────────────────────────────────────────────────────
	return (
		<main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12">
			<h1 className="text-center text-4xl font-black text-blue-600">เที่ยวไหนดี</h1>

			<SearchBar searchValue={searchValue} onSearchChange={setSearchValue} />

			{isLoading ? (
				<p className="text-center text-sm text-gray-400">กำลังโหลด...</p>
			) : (
				<TripList trips={trips} onTagClick={handleTagClick} />
			)}
		</main>
	);
};

export default HomePage;
