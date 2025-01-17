const CardAnswer = ({ choice, onClick }: { choice: string; isSelected: boolean; onClick: () => void }) => {
	return (
		<div>
			<li>
				<button
					className="bg-black border border-gray-300 rounded-md p-4  text-left"
					onClick={onClick}
				>
					{choice}
				</button>
			</li>
		</div>
	);
};

export default CardAnswer;

// this is card answer