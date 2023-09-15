import Link from 'next/link'
import Logo from './Header/logo'
//import Button from '@/assets/button'

const header = () => {
	return (
		<div className="flex justify-center px-3 py-2 text-center">
			{/*<Logo />*/}
			<Link
				href="/"
				className="cursor-pointer p-3 text-5xl font-bold text-purple-900">
				Socialytics
			</Link>
			{/*<Link
				href="#"
				className={
					'cursor-pointer rounded-full bg-landing-green px-3 py-2 font-normal text-white hover:bg-landing-green-dark'
				}>
				Join Waitlist
			</Link>*/}
			{/*<Button
				data={'Join Waitlist'}
				className={
					'cursor-pointer rounded-full bg-landing-green px-3 py-2 font-normal text-white hover:bg-landing-green-dark'
				}
			/>*/}
		</div>
	)
}

export default header
