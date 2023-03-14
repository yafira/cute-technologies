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
					return (
						<section key={index} className={styles.card}>
							<div>
								<h2>
									<Link href={`/posts/${post.resource}`}></Link>
								</h2>
							</div>
							<div>
								<div className={styles.imgWrap}>
									<Image
										unoptimized
										src={post.image}
										responsive
										width={260}
										height={270}
										alt='resource'
										npm
									/>
								</div>

								<h3>{post.title}</h3>
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
