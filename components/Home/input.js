'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import loadingGif from '../../assets/icons8-next.gif'
const Input = () => {
	const [userName, setUserName] = useState('')

	const handleInput = e => {
		setUserName(e.target.value)
		// console.log(e)
	}

	const handleEnter = e => {
		if (userName.trim() !== '') {
			// add logic for querry from backend
			console.log(userName)
			setUserName('')
		}
	}

	return (
		<div className="flex justify-center gap-4 rounded-full border-2 border-gray-300 px-5 py-3 text-lg">
			<select
				name="social-media"
				id="social-media"
				className="rounded-md border-2 border-white px-2 py-1 hover:border-black">
				<option value="tiktok">TikTok</option>
				<option value="reels">Reels</option>
				<option value="shorts">Shorts</option>
				<option value="others">Others</option>
			</select>
			<input
				placeholder="@username"
				type="text"
				name="username"
				value={userName}
				autoComplete="off"
				className={'focus:outline-none'}
				onChange={handleInput}
			/>
			<button onClick={handleEnter}>
				<Image src={loadingGif} width={45} alt="enter" />
			</button>
		</div>
	)
}

export default Input
