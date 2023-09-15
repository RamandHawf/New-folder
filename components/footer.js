import Link from 'next/link'
import React from 'react'
import SocialMedia from './Footer/social-media'

const Footer = () => {
	const dbData = {
		companyName: 'Socialytics',
		version: 'v0.0.1', // version   (in the form of Major.minor.patch)
		info: ['Terms of Service', 'Privacy Policy'],
	}
	return (
		<footer className="container mx-auto my-9 flex flex-col justify-center space-y-2">
			<div className="flex items-center justify-center gap-2 font-medium text-purple-900">
				<h3 className="text-center text-3xl">{dbData?.companyName}</h3>
			</div>
			<SocialMedia />
			<div className="flex flex-col items-center justify-center gap-5 font-medium md:flex-row">
				{dbData.info.map((item, idx) => (
					<Link href="/" key={idx}>
						<p key={idx} className="text-center opacity-50">
							{item}
						</p>
					</Link>
				))}
			</div>
		</footer>
	)
}

export default Footer
