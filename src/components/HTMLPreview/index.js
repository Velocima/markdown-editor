import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

export default function index({ markdown }) {
	const md = new MarkdownIt();
	const html = md.render(markdown);
	return (
		<div>
			<h1>HTML Preview</h1>
			<section>{parse(html)}</section>
		</div>
	);
}
