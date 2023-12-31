import { useState } from "react";

import CopyBox from "./CopyBox";

interface UrlBuilderProps {
	sessionId: string;
}

const UrlBuilder = ({ sessionId }: UrlBuilderProps) => {
	const [dimensions, setDimensions] = useState({ width: 256, height: 256 });

	const commonDimensions = [32, 64, 256, 512, 1024];

	const constructedWidth = dimensions.width ?? "{width}";
	const constructedHeight = !!dimensions.height
		? dimensions.height
		: "{height}";

	const constructedUrl = `https://placeholdr.ai/${sessionId}/${constructedWidth}/${constructedHeight}`;

	return (
		<div className="flex flex-col gap-8 border rounded-lg p-4">
			<div className="flex flex-col gap-4">
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
										value > 1024
											? 1024
											: value < 1
											? 1
											: value;

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
										value > 1024
											? 1024
											: value < 1
											? 1
											: value;

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
				<span className="text-xs text-gray-400">Common Dimensions</span>
				<div className="flex flex-wrap justify-center gap-2">
					{commonDimensions.map(dimension => (
						<button
							className="border p-2 rounded-lg hover:bg-gray-100"
							onClick={() => {
								setDimensions({
									width: dimension,
									height: dimension,
								});
							}}
						>
							{dimension} x {dimension}
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<span>Your URL</span>
				<CopyBox toCopy={constructedUrl} />
			</div>
		</div>
	);
};

export default UrlBuilder;
