import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllPublished } from '../lib/notion'
import SearchBar from '../components/SearchBar'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import styles from '../styles/Home.module.css'
import PostItem from '../components/PostItem'
import Header from '@/components/Header'

const SearchPage = ({ searchResults }) => {
	const router = useRouter()
	const { query } = router.query

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (query && query.trim() !== '') {
			// Fetch data only if query is not empty or just whitespace
			// Simulate loading
			setTimeout(() => {
				setIsLoading(false) // Set loading to false after simulated loading
			}, 2000) // Simulated delay of 2 seconds
		} else {
			setIsLoading(false) // No need to fetch results if query is empty
		}
	}, [query])

	const filteredResults = searchResults.filter((result) =>
		result.title.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<div>
			<Header />

			<SearchBar />
			<div className={styles.container}>
				<h2>Search Results for ✧ {query} ✧</h2>
			</div>
			{isLoading ? (
				<p>Loading...</p>
			) : query && query.trim() !== '' ? (
				filteredResults.length === 0 ? (
					<p>No results found.</p>
				) : (
					<div className={styles.main}>
						<main className={styles.main}>
							<ResponsiveMasonry
								columnsCountBreakPoints={{
									350: 1,
									750: 2,
									900: 3,
									1000: 4,
									1200: 5,
								}}
							>
								<Masonry gutter={10}>
									{filteredResults.map((result, index) => (
										<PostItem
											key={index}
											imgURL={result.image}
											title={result.title}
											link={result.link}
											description={result.description}
											tags={result.tags}
										/>
									))}
								</Masonry>
							</ResponsiveMasonry>
						</main>
					</div>
				)
			) : (
				<p>Enter a search query to see results.</p>
			)}
		</div>
	)
}

export async function getServerSideProps() {
	const searchResults = await getAllPublished()
	return { props: { searchResults } }
}

export default SearchPage
