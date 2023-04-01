import { getPostsByTag } from 'src/lib/notion'
import Header from 'src/components/Header'
import Footer from '@/components/Footer'
import PostList from '@/components/PostList'
import styles from 'src/styles/Home.module.css'

export async function getServerSideProps({ params }) {
	const res = await getPostsByTag(params.tag)
	const posts = res.results

	return {
		props: {
			posts,
		},
	}
}

const Tag = ({ posts }) => (
	<div className={styles.container}>
		<Header />
		<PostList posts={posts} tagPage />
		<Footer />
	</div>
)

export default Tag
