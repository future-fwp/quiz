const Triangle = ({ addlayout }: { addlayout: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="720"
			height="830"
			viewBox="0 0 720 830"
			fill="none"
			className={`absolute blur-3xl ${addlayout}`}
		>
			<g filter="url(#filter0_f_4_2731)">
				<path
					d="M125 705.5L439 129L616.5 330L125 705.5Z"
					fill="#06DCEB"
				/>
				<path
					d="M125 705.5L439 129L616.5 330L125 705.5Z"
					stroke="#06DCEB"
					stroke-width="10"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_4_2731"
					x="0.609066"
					y="0.340332"
					width="743.192"
					height="829.133"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood
						flood-opacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="60"
						result="effect1_foregroundBlur_4_2731"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default Triangle;
