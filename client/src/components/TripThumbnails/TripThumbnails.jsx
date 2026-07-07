// ── TripThumbnails ────────────────────────────────────────────────────
// Renders the 3 small photos that accompany a trip's main image

const THUMBNAIL_COUNT = 3;

const TripThumbnails = ({ photos, title }) => {
	const thumbnailPhotos = photos.slice(1, THUMBNAIL_COUNT + 1);

	return (
		<div className="flex gap-1.5">
			{thumbnailPhotos.map((photo) => (
				<img key={photo} src={photo} alt={title} className="h-12 w-14 rounded-md object-cover" />
			))}
		</div>
	);
};

export default TripThumbnails;
