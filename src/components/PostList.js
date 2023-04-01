import styles from '../styles/Home.module.css'
import PostItem from './PostItem'

export default function PostList({ posts, tagPage }) {
	if (!posts) return <h1>No resources available.</h1>

	return (
		<main className={`${styles.columns} ${styles.main}`}>
			{posts?.map((post, index) => (
				<PostItem
					key={index}
					imgURL={tagPage ? post.properties.Image.url : post.image}
					title={
						tagPage
							? post.properties.Resource.title[0].text.content
							: post.title
					}
					link={tagPage ? post.properties.Link.url : post.link}
					description={
						tagPage
							? post.properties.Description.rich_text[0].text.content
							: post.description
					}
					tags={tagPage ? post.properties.Tags.multi_select : post.tags}
					tagPage={tagPage}
				/>
			))}
		</main>
	)
}
