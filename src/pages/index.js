import { getAllPublished, getPostsByTag } from 'src/lib/notion'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import PostList from '@/components/PostList'
import styles from 'src/styles/Home.module.css'

export const getStaticProps = async () => {
	const data = await getAllPublished()
	await getPostsByTag('theme')

	return {
		props: {
			posts: data,
		},
		revalidate: 60,
	}
}

export default function Home({ posts }) {
	return (
		<div className={styles.container}>
			<Header />
			<PostList posts={posts} />
			<Footer />
		</div>
	)
}
