import { useState } from "react";

import CopyCard from "./CopyCard";

interface UrlBuilderProps {
	sessionId: string;
}

const UrlBuilder = ({ sessionId }: UrlBuilderProps) => {
	const [dimensions, setDimensions] = useState({ width: 256, height: 256 });

	const constructedWidth = dimensions.width ?? "{width}";
	const constructedHeight = !!dimensions.height
		? dimensions.height
		: "{height}";

	console.log(constructedWidth, constructedHeight);

	const constructedUrl = `https://placeholdr.ai/${sessionId}/${constructedWidth}/${constructedHeight}`;

	return (
		<div className="flex flex-col gap-4 border rounded-lg p-4">
			<div className="flex flex-col md:flex-row gap-4 justify-around">
				<div className="flex-1 flex flex-col gap-2">
					<label htmlFor="previewWidth">Width</label>
					<input
						id="previewWidth"
						type="number"
						onChange={e => {
							const re = /^[0-9\b]+$/;
							if (
								e.target.value === "" ||
								re.test(e.target.value)
							) {
								// Max 1024 - Min 1
								const value = parseInt(e.target.value);
								const width =
									value > 1024 ? 1024 : value < 1 ? 1 : value;

								setDimensions({
									...dimensions,
									width: width,
								});
							} else {
								setDimensions({
									...dimensions,
									width: 1,
								});
							}
						}}
						min={1}
						max={1024}
						value={dimensions.width}
						pattern="\d*"
						inputMode="numeric"
						className="rounded-lg border p-2 w-full"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-2">
					<label htmlFor="previewHeight">Height</label>
					<input
						id="previewHeight"
						type="number"
						onChange={e => {
							const re = /^[0-9\b]+$/;
							if (
								e.target.value === "" ||
								re.test(e.target.value)
							) {
								// Max 1024 - Min 1
								const value = parseInt(e.target.value);
								const height =
									value > 1024 ? 1024 : value < 1 ? 1 : value;

								setDimensions({
									...dimensions,
									height: height,
								});
							} else {
								setDimensions({
									...dimensions,
									height: 1,
								});
							}
						}}
						min={1}
						max={1024}
						value={dimensions.height}
						pattern="\d*"
						inputMode="numeric"
						className="rounded-lg border p-2 w-full"
					/>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-2">
				<span>Your URL</span>
				<CopyCard toCopy={constructedUrl} />
			</div>
		</div>
	);
};

export default UrlBuilder;
