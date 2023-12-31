import { useState } from "react";

import SessionCard from "./SessionCard";
import LimitedTextarea from "./LimitedTextarea";

import { GenerateRequest } from "/@types/generate";

const GenerationForm = () => {
	const [request, setRequest] = useState<GenerateRequest>({
		prompt: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [sessionId, setSessionId] = useState<string | null>(null);

	const characterLimit = 2000;

	const readyToGenerate = request.prompt.length > 0; // && request.engine;

	const generate = async () => {
		setSessionId(null);

		const api_base = import.meta.env.VITE_API_BASE;

		const res = await fetch(`${api_base}/register`, {
			method: "POST",
			body: JSON.stringify({
				...request,
				// Limit prompt length, just in case
				prompt: request.prompt.slice(0, characterLimit),
			}),
		});

		if (!res.ok) {
			setIsLoading(false);
			throw new Error("Something went wrong!");
		}

		const data = await res.json();

		const { sessionId } = data;
		setSessionId(sessionId);

		setRequest({ prompt: "" });
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
					<LimitedTextarea
						limit={characterLimit}
						value={request.prompt}
						onChange={value =>
							setRequest({ ...request, prompt: value })
						}
						placeholder="Describe the placeholder images of your wildest dreams..."
					/>
					<button
						className="btn bg-pink-600 enabled:hover:bg-pink-700 disabled:bg-gray-500 text-white"
						disabled={!readyToGenerate || isLoading}
						onClick={async () => {
							if (!readyToGenerate || isLoading) return;

							setIsLoading(true);

							try {
								await generate();
							} catch (err) {
								console.error(err);
							}

							setIsLoading(false);
						}}
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
