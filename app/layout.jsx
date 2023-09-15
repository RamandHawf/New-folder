import 'tailwindcss/tailwind.css'
import { Roboto } from 'next/font/google'
import Header from '@/header'
import Footer from '@/footer'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})



export const metadata = {
	title: 'Get Socialytics',
	description: 'Get insights.',
}

export default ({ children }) => {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
