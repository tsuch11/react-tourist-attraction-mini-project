// ── TripCard ──────────────────────────────────────────────────────────
// Displays a single trip: title, description, photos, tags and actions
// แก้ไขได้: DESCRIPTION_MAX_LENGTH

import { truncateText } from "../../utils/truncateText";
import TripTags from "../TripTags/TripTags";
import TripThumbnails from "../TripThumbnails/TripThumbnails";
import CopyLinkButton from "../CopyLinkButton/CopyLinkButton";

const DESCRIPTION_MAX_LENGTH = 100;

const TripCard = ({ trip, onTagClick }) => {
	const { title, url, description, photos, tags } = trip;
	const shortDescription = truncateText(description, DESCRIPTION_MAX_LENGTH);

	return (
		<article className="flex flex-col gap-4 border-b border-gray-100 py-6 sm:flex-row">
			<img src={photos[0]} alt={title} className="h-48 w-full shrink-0 rounded-xl object-cover sm:w-64" />

			<div className="flex flex-1 flex-col gap-3">
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="text-lg font-bold text-gray-900 transition-colors duration-150 hover:text-blue-600"
				>
					{title}
				</a>

				<p className="text-sm leading-relaxed text-gray-500">
					{shortDescription}{" "}
					<a href={url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
						อ่านต่อ
					</a>
				</p>

				<TripTags tags={tags} onTagClick={onTagClick} />

				<div className="flex items-center gap-3">
					<TripThumbnails photos={photos} title={title} />
					<CopyLinkButton url={url} />
				</div>
			</div>
		</article>
	);
};

export default TripCard;
