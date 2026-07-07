// ── useTrips ──────────────────────────────────────────────────────────
// Fetch trips from the server, filtered by keywords
// แก้ไขได้: API_BASE_URL

import { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:4001";

const useTrips = (keywords) => {
	const [trips, setTrips] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		const fetchTrips = async () => {
			setIsLoading(true);

			try {
				const endpoint = `${API_BASE_URL}/trips?keywords=${encodeURIComponent(keywords)}`;
				const response = await fetch(endpoint, { signal: controller.signal });
				const { data } = await response.json();

				setTrips(data);
			} catch (error) {
				if (error.name !== "AbortError") {
					console.error("useTrips failed:", error);
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchTrips();

		return () => controller.abort();
	}, [keywords]);

	return { trips, isLoading };
};

export default useTrips;
