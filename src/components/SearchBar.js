import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const router = useRouter()

	const handleSearch = () => {
		if (searchQuery.trim() !== '') {
			router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
		}
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			if (searchQuery.trim() !== '') {
				handleSearch()
			} else {
				e.preventDefault() // Prevent page navigation if search query is empty
			}
		}
	}

	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.searchInput}
				type='text'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onKeyPress={handleKeyPress}
				placeholder='Search...'
			/>
			<button className={styles.searchButton} onClick={handleSearch}>
				Search
			</button>
		</div>
	)
}

export default SearchBar
