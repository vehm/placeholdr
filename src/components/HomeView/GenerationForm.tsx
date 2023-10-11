import { useState } from "react";

import SessionCard from "./SessionCard";

import { GenerateRequest } from "/@types/generate";

const GenerationForm = () => {
	const [request, setRequest] = useState<GenerateRequest>({
		prompt: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [sessionId, setSessionId] = useState<string | null>("test");

	const readyToGenerate = request.prompt.length > 0; // && request.engine;

	const generate = async () => {
		setSessionId(null);

		const api_base = import.meta.env.VITE_API_BASE;

		const res = await fetch(`${api_base}/register`, {
			method: "POST",
			body: JSON.stringify(request),
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
