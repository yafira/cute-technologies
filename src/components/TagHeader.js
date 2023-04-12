import styles from '../styles/TagHeader.module.css'

const TagHeader = ({ tags, tagPage }) => (
	<div className={styles.TagHeader}>
		{tags?.map((tag, key) => {
			const tagText = tagPage ? tag.name : tag

			return (
				<h1 key={key} href={`/tags/${tagText}`}>
					{tagText}
				</h1>
			)
		})}
	</div>
)

export default TagHeader
