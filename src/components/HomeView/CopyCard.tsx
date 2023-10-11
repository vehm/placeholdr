import { useState } from "react";

interface CopyCardProps {
	toCopy: string;
}

const CopyCard = ({ toCopy }: CopyCardProps) => {
	const [didCopy, setDidCopy] = useState(false);

	return (
		<div className="rounded-lg bg-gray-200 p-4 relative overflow-x-auto">
			<span>{toCopy}</span>
			<button
				className="border border-gray-400 m-2 p-2 rounded-lg text-sm absolute right-0 top-0 bottom-0 enabled:hover:bg-gray-300 enabled:hover:scale-105 transition-all"
				disabled={didCopy}
				onClick={async () => {
					try {
						await navigator.clipboard.writeText(toCopy);
						setDidCopy(true);
						setTimeout(() => setDidCopy(false), 3000);
					} catch (err) {
						console.error(err);
						setDidCopy(false);
					}
				}}
			>
				{didCopy ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};

export default CopyCard;
