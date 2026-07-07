const ELLIPSIS = "...";

export const truncateText = (text, maxLength) => {
	const plainText = text.replace(/\n+/g, " ").trim();

	return plainText.length > maxLength ? `${plainText.slice(0, maxLength)}${ELLIPSIS}` : plainText;
};
