import Image from 'next/image'
import Link from 'next/link'
import { getAllPublished, getPostsByTag } from '../lib/notion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
	if (!posts) return <h1>No resources available</h1>

	return (
		<div className={styles.container}>
			<Header />
			<main className={`${styles.columns} ${styles.main}`}>
				{posts.map((post, index) => {
					//console.log(post.tags)
					console.log(post)
					return (
						<section key={index} className={styles.card}>
							<div>
								<div className={styles.imgWrap}>
									<Image
										unoptimized
										src={post.image}
										responsive
										fill
										alt='resource'
										npm
									/>
								</div>
								<div>
									<a target='_blank' href={post.link}>
										<h3>{post.title}</h3>
									</a>
								</div>
								<p>{post.description}</p>
								{post.tags.map((tag, key) => (
									<Link key={key} href={`/tags/${tag}`}>
										<h5>{tag}</h5>
									</Link>
								))}
							</div>
						</section>
					)
				})}
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
