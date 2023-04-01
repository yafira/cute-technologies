import styles from '../styles/Home.module.css'
import PostItem from './PostItem'

export default function PostListTags({ posts }) {
	if (!posts) return <h1>No resources available.</h1>

	return (
		<main className={`${styles.columns} ${styles.main}`}>
			{posts?.map((post, index) => (
				<PostItem
					key={index}
					imgURL={post.image}
					title={post.title}
					link={post.link}
					description={post.description}
					tags={post.tags}
				/>
			))}
		</main>
	)
}
