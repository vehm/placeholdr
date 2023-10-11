import CodeBlock from "./CodeBlock";
import GenerationForm from "./GenerationForm";

const HomeView = () => {
	return (
		<>
			<div
				className={
					"flex flex-col gap-4 rounded-none xs:rounded-lg p-8 border bg-white"
				}
			>
				<h1 className={"font-bold text-4xl"}>Placeholdr</h1>
				<h2 className="text-xl flex flex-wrap gap-4 justify-center">
					<span>Prompt&#128394;</span>
					<span>Generate&#9881;</span>
					<span>Place&#129513;</span>
					{/* <span>Be Lazy&#128564;</span> */}
				</h2>
				<h3 className="font-bold underline underline-offset-4">
					But Why?&#129300;
				</h3>
				<p>
					<b>I'm lazy.</b> I don't want to have to search for relevant
					placeholder images for my projects or use solid colors. I
					want something that's relevant to my project, but I don't
					want to have to search for it.&#129335;
				</p>
				<p>
					Solution? &#129302; <b>A-freaking-I</b>, of course! Just
					like everyone and their mother, I slapped some AI on a
					non-issue and called it a &#10024;solution&#10024; -{" "}
					<i>wow!!</i>
				</p>
				<p>
					But really, I hope you enjoy this little project. It's a fun
					little thing I created to make my life easier, and I hope it
					can make your life easier, too.&#10084;
				</p>
				<h3 className="font-bold underline underline-offset-8">
					But How?&#129292;
				</h3>
				<CodeBlock />
				<p>
					Give it a <b>prompt</b>, grab your <b>session id</b>, and
					use the images in your project with a single URL. That
					simple!&#128526;
				</p>
				<GenerationForm />
				<span className="text-sm text-gray-600">
					&#128293; Roast my code on{" "}
					<a
						className="underline hover:text-pink-700"
						href="https://github.com/vehm/placeholdr"
						target="_blank"
					>
						GitHub
					</a>{" "}
					&#128293;
				</span>
			</div>
		</>
	);
};

export default HomeView;
