import { useState } from "react";

interface CopyBoxProps {
	toCopy: string;
}

const CopyBox = ({ toCopy }: CopyBoxProps) => {
	const [didCopy, setDidCopy] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(toCopy);
			setDidCopy(true);
			setTimeout(() => setDidCopy(false), 3000);
		} catch (err) {
			console.error(err);
			setDidCopy(false);
		}
	};

	return (
		<div className="flex bg-gray-100 rounded-lg w-full">
			<div className="flex-1 p-4 break-words truncate">{toCopy}</div>
			<div className="flex p-2">
				<button
					className="text-sm p-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none"
					onClick={handleCopy}
				>
					{didCopy ? "Copied!" : "Copy"}
				</button>
			</div>
		</div>
	);
};

export default CopyBox;
