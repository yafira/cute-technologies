import Image from 'next/image'
import Link from 'next/link'
import { getAllPublished, getPostsByTag } from 'src/lib/notion'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import styles from 'src/styles/Home.module.css'

export default function Home({ posts }) {
	if (!posts) return <h1>No resources available.</h1>

	return (
		<div className={styles.container}>
			<Header />

			<main className={`${styles.columns} ${styles.main}`}>
				{posts.map((post, index) => (
					<section key={index} className={styles.card}>
						<Image
							unoptimized
							src={post.image}
							responsive
							fill
							alt='resource'
							npm
							className={styles.imgWrap}
						/>

						<a target='_blank' href={post.link}>
							<h3>{post.title}</h3>
						</a>

						<p>{post.description}</p>

						<div className={styles.tags}>
							{post.tags.map((tag, key) => (
								<Link key={key} href={`/tags/${tag}`}>
									<h5>{tag}</h5>
								</Link>
							))}
						</div>
					</section>
				))}
			</main>
			<Footer />
		</div>
	)
}

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
