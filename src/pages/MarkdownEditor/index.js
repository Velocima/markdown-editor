import { HTMLPreview, MarkdownInput } from '../../components';
import styles from './styles.module.css';

export default function index() {
	return (
		<main className={styles.main}>
			<MarkdownInput />
			<HTMLPreview />
		</main>
	);
}
