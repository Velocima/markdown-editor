import { useState } from 'react';
import { HTMLPreview, MarkdownInput } from '../../components';
import styles from './styles.module.css';

export default function Index() {
	const [markdown, setMarkdown] = useState('');

	const updateMarkdown = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<main className={styles.main}>
			<MarkdownInput markdown={markdown} updateMarkdown={updateMarkdown} />
			<HTMLPreview markdown={markdown} />
		</main>
	);
}
