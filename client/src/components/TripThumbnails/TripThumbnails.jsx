// ── TripThumbnails ────────────────────────────────────────────────────
// Renders the 3 small photos that accompany a trip's main image

const THUMBNAIL_COUNT = 3;

const TripThumbnails = ({ photos, title }) => {
	const thumbnailPhotos = photos.slice(1, THUMBNAIL_COUNT + 1);

	return (
		<div className="flex gap-2">
			{thumbnailPhotos.map((photo) => (
				<img key={photo} src={photo} alt={title} className="h-14 w-16 rounded-lg object-cover" />
			))}
		</div>
	);
};

export default TripThumbnails;
