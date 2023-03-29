import Image from 'next/image'
import { getPostsByTag } from '../../lib/notion'

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

const Tag = ({ posts }) => {
	// console.log(posts)

	return (
		<div>
			<span>
				{posts.map((post, id) => {
					if (!post.properties.Image.url) return <></>

					return (
						<span key={id}>
							{
								<Image
									unoptimized
									responsive
									width={260}
									height={270}
									src={post.properties.Image.url}
									alt='resource'
								/>
							}
						</span>
					)
				})}
			</span>
		</div>
	)
}

export default Tag
