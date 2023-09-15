const Bottom = () => {
	const db = {
		title: 'Coming Soon',
		content: 'A paid membership for PRO features',
		data: [
			'- Track multiple accounts at the same time.',
			"- Associate users' multiple social media accounts together.",
			'- Unlimited profile refreshes.',
			'- Analyze tags, audios, post times, and more with data from more than 40k profiles.',
		],
	}
	return (
		<section className=" flex flex-col gap-4 bg-gradient-to-b from-[#F2FDF6] to-white px-9 py-9">
			<div>
				<h3 className="text-3xl font-bold text-paragraph-color">
					{db.title}
				</h3>
				<p>{db.content}</p>
			</div>

			<div>
				{db.data.map((item, idx) => (
					<p key={idx} className="opacity-80">
						{item}
					</p>
				))}
			</div>

			{/*<Link
				href="/waitlist"
				className="animate-bounce text-landing-green underline">
				Join Waitlist
			</Link>*/}
		</section>
	)
}

export default Bottom
