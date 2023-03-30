import Image from 'next/image'
import { getPostsByTag } from 'src/lib/notion'
import Header from 'src/components/Header'
import Footer from '@/components/Footer'
import styles from 'src/styles/Home.module.css'

export async function getServerSideProps({ params }) {
	const res = await getPostsByTag(params.tag)
	const posts = res.results

	console.log({ res, posts })

	return {
		props: {
			posts,
		},
	}
}

const Tag = ({ posts }) => (
	<div className={styles.container}>
		<Header />
		<div className={styles.tagImages}>
			<main className={`${styles.columns} ${styles.main}`}>
				{posts.map((post, id) => {
					if (!post.properties.Image.url) return <></>

					return (
						<section key={id} className={styles.card}>
							<Image
								key={id}
								unoptimized
								responsive
								fill
								src={post.properties.Image.url}
								alt='resource'
								className={styles.imgTag}
							/>
						</section>
					)
				})}
			</main>
		</div>
		<Footer />
	</div>
)

export default Tag
