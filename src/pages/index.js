import { getAllPublished, getPostsByTag } from 'src/lib/notion'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import PostListIndex from '@/components/PostListIndex'
import styles from 'src/styles/Home.module.css'
import Head from 'next/head'

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
			<Head>
				<title>cute technologies</title>
			</Head>
			<Header />
			<PostListIndex posts={posts} />
			<Footer />
		</div>
	)
}
