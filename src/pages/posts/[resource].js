import ReactMarkdown from 'react-markdown'
import { getAllPublished, getPostByResource } from '../../lib/notion.js'

const Post = ({ post }) => (
	<section>
		<h2>{post.metadata.title}</h2>
		<span>{post.metadata.url}</span>
		<p>{post.metadata.tags.join(', ')}</p>
		<span>{post.metadata.date}</span>
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
