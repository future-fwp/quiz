const CircleGlow = ({ addlayout }: { addlayout: string }) => {
	return <div className={`w-[300px] h-[300px] rounded-full bg-secondary blur-[100px] absolute ${addlayout}`}></div>;
};

export default CircleGlow;
