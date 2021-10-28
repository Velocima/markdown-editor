export default function index({ markdown, updateMarkdown }) {
	return (
		<div>
			<h1>Markdown Input</h1>
			<textarea
				value={markdown}
				onChange={updateMarkdown}
				name='Markdown input'
				id=''
				cols='30'
				rows='10'
			></textarea>
		</div>
	);
}
