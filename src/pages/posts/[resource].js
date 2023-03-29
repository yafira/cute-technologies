import ReactMarkdown from 'react-markdown'
import { getAllPublished, getPostByResource } from '../../lib/notion.js'

const Post = ({ post }) => (
	<section>
		<h3>{post.metadata.title}</h3>
		<span>{post.metadata.date}</span>
		<p>{post.metadata.tags.join(', ')}</p>
		<ReactMarkdown>{post.markdown}</ReactMarkdown>
	</section>
)

export const getStaticProps = async ({ params }) => {
	const post = await getPostByResource(params.resource)
	return {
		props: {
			post,
		},
		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const posts = await getAllPublished()
	const paths = posts.map(({ resource }) => ({ params: { resource } }))
	return {
		paths,
		fallback: 'blocking',
	}
}

export default Post
