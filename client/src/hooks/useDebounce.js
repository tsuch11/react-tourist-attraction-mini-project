// ── useDebounce ───────────────────────────────────────────────────────
// Delay updating a value until it stays unchanged for delayMs

import { useEffect, useState } from "react";

const useDebounce = (value, delayMs) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => setDebouncedValue(value), delayMs);

		return () => clearTimeout(timeoutId);
	}, [value, delayMs]);

	return debouncedValue;
};

export default useDebounce;
