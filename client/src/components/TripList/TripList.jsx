// ── TripList ──────────────────────────────────────────────────────────
// Renders the list of trips returned from the search, or an empty state

import TripCard from "../TripCard/TripCard";

const TripList = ({ trips, onTagClick }) => {
	const isEmpty = trips.length === 0;

	return isEmpty ? (
		<p className="py-10 text-center text-sm text-gray-400">ไม่พบสถานที่ท่องเที่ยวที่ค้นหา</p>
	) : (
		<div className="flex w-full flex-col divide-y divide-gray-100">
			{trips.map((trip) => (
				<TripCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
			))}
		</div>
	);
};

export default TripList;
