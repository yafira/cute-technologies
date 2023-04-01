import Logo from '../assets/logo.png'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
	return (
		<div className={styles.Header}>
			<Image className={styles.logo} src={Logo} alt='logo' />
			<Link href='/'>
				<h1>cute technologies</h1>
			</Link>

			<p>
				A collection of cybertwee functional tools and resources to make your
				computing .env cuter.
			</p>
		</div>
	)
}
