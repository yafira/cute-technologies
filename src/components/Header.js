import Logo from '../assets/logo.png'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<div className={styles.Header}>
			<Image className={styles.logo} src={Logo} alt='logo' />
			<h1>cute technologies</h1>
			<p>
				A collection of cybertwee tools and resources to make your computing
				.env cuter.
			</p>
		</div>
	)
}
