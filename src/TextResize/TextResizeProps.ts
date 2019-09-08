export default interface TextResizeProps {
	children: JSX.Element | JSX.Element[],
	defaultFontSize?: number;
	minFontSize?: number;
	maxFontSize?: number;
	className?: string;
}