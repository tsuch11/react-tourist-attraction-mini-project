// ── CopyLinkButton ────────────────────────────────────────────────────
// Copies a trip's url to the clipboard and shows a brief confirmation

import { useState } from "react";
import { copyToClipboard } from "../../utils/copyToClipboard";

const COPY_FEEDBACK_DURATION_MS = 1500;

const CopyLinkButton = ({ url }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyClick = async () => {
		await copyToClipboard(url);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), COPY_FEEDBACK_DURATION_MS);
	};

	return (
		<button
			type="button"
			onClick={handleCopyClick}
			title="คัดลอกลิงก์"
			className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900"
		>
			{isCopied ? "✓" : "🔗"}
		</button>
	);
};

export default CopyLinkButton;
