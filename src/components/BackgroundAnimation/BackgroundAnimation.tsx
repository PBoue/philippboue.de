import "./BackgroundAnimation.css";

export const BackgroundAnimation = ({}) => {
	return (
		<div className="pbo--bg h-full w-full blur-[50px] overflow-hidden flex items-center content-center fixed top-0 left-0 z-0">
			<div className="shape1 w-[50%] h-[50%] rounded-[50%] absolute z-[1]"></div>
			<div className="shape2 w-[50%] h-[50%] rounded-[50%] absolute z-[2]"></div>
			<div className="shape3 w-[50%] h-[50%] rounded-[50%] absolute z-[3]"></div>
		</div>
	);
};
