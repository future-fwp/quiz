const CardAnswer = ({ choice, isSelected }: { choice: string; isSelected: boolean }) => {
	return (
		<div>
			<li>
				<button className="bg-black border border-gray-300 rounded-md p-4  text-left">{choice}</button>
			</li>
		</div>
	);
};

export default CardAnswer;
