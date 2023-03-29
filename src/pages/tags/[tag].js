import Image from 'next/image'
import { getPostsByTag } from 'src/lib/notion'

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
	<div className={styles.tagImages}>
		{posts.map((post, id) => {
			if (!post.properties.Image.url) return <></>

			return (
				<Image
					key={id}
					unoptimized
					responsive
					fill
					src={post.properties.Image.url}
					alt='resource'
					className={styles.imgTag}
				/>
			)
		})}
	</div>
)

export default Tag
