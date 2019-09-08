import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import TextResize from './TextResize';

const defaultText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const defaultText2 = 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
const defaultText3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';

/**
 * Example
 * */
const RenderedComponent = () => {
	const [text, setText] = useState(defaultText);
	const [text2, setText2] = useState(defaultText2);
	const [text3, setText3] = useState(defaultText3);

	useEffect(() => {
		setTimeout(() => {
			const textLength = Math.round(Math.random() * defaultText.length);
			setText(defaultText.substring(0, textLength));
			const textLength2 = Math.round(Math.random() * defaultText2.length);
			setText2(defaultText2.substring(0, textLength2));
			const textLength3 = Math.round(Math.random() * defaultText3.length);
			setText3(defaultText3.substring(0, textLength3));
		}, 1000);
	}, [text]);

	return (
		<div style={{ width: '800px', height: '600px', border: 'darkred solid', margin: 'auto' }}>
			<TextResize defaultFontSize={26}>
				<p>{text}</p>
				<p>{text2}</p>
				<p>{text3}</p>
			</TextResize>
		</div>
	);
};

ReactDOM.render(<RenderedComponent/>, document.getElementById('root'));
