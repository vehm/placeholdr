import { useState } from "react";

import SessionCard from "./SessionCard";

import { GenerateRequest } from "/@types/generate";

const GenerationForm = () => {
	const [request, setRequest] = useState<GenerateRequest>({
		prompt: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	const [sessionId, setSessionId] = useState<string | null>(null);

	const readyToGenerate = request.prompt.length > 0; // && request.engine;

	const generate = async () => {
		setIsLoading(true);
		setSessionId(null);

		// TODO: Add Fetch API Call Here

		setTimeout(() => {
			setIsLoading(false);
			setSessionId("12345-12345678-9012abcd-67890");
			setRequest({ prompt: "" });
		}, 10000);

		// setIsLoading(false);
		// setRequest({ prompt: "" });
	};

	return (
		<>
			{sessionId ? (
				<SessionCard
					sessionId={sessionId}
					onReset={() => setSessionId(null)}
				/>
			) : (
				<>
					<textarea
						className={"border rounded-lg p-4"}
						placeholder="Describe the placeholder images of your wildest dreams..."
						cols={30}
						rows={5}
						value={request.prompt}
						onChange={e =>
							setRequest({ ...request, prompt: e.target.value })
						}
					></textarea>
					<button
						className="btn bg-pink-600 enabled:hover:bg-pink-700 disabled:bg-gray-500 text-white"
						disabled={!readyToGenerate || isLoading}
						onClick={generate}
					>
						{isLoading
							? "Generating..."
							: readyToGenerate
							? "Next step!"
							: "Provide a prompt..."}
					</button>
				</>
			)}
		</>
	);
};

export default GenerationForm;
