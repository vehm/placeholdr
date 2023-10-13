interface LimitedTextareaProps {
	limit: number;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const LimitedTextarea = ({
	limit,
	value,
	onChange,
	placeholder,
}: LimitedTextareaProps) => {
	const currentLength = value.length;

	return (
		<div className="w-full">
			<textarea
				className={"border rounded-lg p-4 w-full"}
				placeholder={placeholder}
				cols={30}
				rows={5}
				value={value}
				onChange={e => onChange(e.target.value.slice(0, limit))}
				onBlur={e => onChange(e.target.value.slice(0, limit))}
				maxLength={limit}
			></textarea>
			<div className="w-full flex justify-end text-end">
				<span className="w-full text-sm text-gray-500">
					{currentLength}/{limit}
				</span>
			</div>
		</div>
	);
};

export default LimitedTextarea;
