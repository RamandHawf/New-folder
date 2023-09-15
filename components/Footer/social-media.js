'use client'
import Link from 'next/link'
import { ImInstagram, ImTwitter } from 'react-icons/im'
const SocialMedia = () => {
	return (
		<div className="flex content-center items-center justify-center gap-5">
			<Link href="/">
				<ImTwitter className="h-7 w-7 fill-purple-900" />
			</Link>
			<Link href="/">
				<ImInstagram className="h-7 w-7 fill-purple-900" />
			</Link>
		</div>
	)
}

export default SocialMedia
