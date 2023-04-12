import styles from '../styles/TagHeader.module.css'
import Link from 'next/link'

const TagHeader = ({ tag }) => (
	<div className={styles.TagHeader}>
		<Link href='/'>
			<h1>˚✧{tag}✧˚</h1>
		</Link>
	</div>
)

export default TagHeader
