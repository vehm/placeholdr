import { useState } from "react";

interface SessionCardProps {
	sessionId: string;
	onReset: () => void;
}

const SessionCard = ({ sessionId, onReset }: SessionCardProps) => {
	const [didCopy, setDidCopy] = useState(false);

	return (
		<div className="flex flex-col gap-4 border rounded-lg p-4">
			<span className="text-md font-semibold">Your Session ID:</span>
			<div className="rounded-lg bg-gray-200 p-4 relative">
				<span>{sessionId}</span>
				<button
					className="border border-gray-400 m-2 p-2 rounded-lg text-sm absolute right-0 top-0 bottom-0 enabled:hover:bg-gray-300 enabled:hover:scale-105 transition-all"
					disabled={didCopy}
					onClick={async () => {
						try {
							await navigator.clipboard.writeText(sessionId);
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
			<button
				className="text-sm underline hover:text-pink-700"
				onClick={onReset}
			>
				&#8635; Generate Another
			</button>
		</div>
	);
};

export default SessionCard;
