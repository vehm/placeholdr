import CopyBox from "./CopyBox";
import UrlBuilder from "./UrlBuilder";

interface SessionCardProps {
	sessionId: string;
	onReset: () => void;
}

const SessionCard = ({ sessionId, onReset }: SessionCardProps) => {
	return (
		<div className="flex flex-col gap-4 border rounded-lg p-4">
			<span className="text-md font-semibold">Your Session ID:</span>
			<CopyBox toCopy={sessionId} />
			<span className="text-md font-semibold">URL Builder:</span>
			<UrlBuilder sessionId={sessionId} />
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
