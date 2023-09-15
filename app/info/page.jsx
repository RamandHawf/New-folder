'use client'
import Table from '@/info/table'
import data from '@/info/tableData.json'

export default () => {
	const columns = [
		{ label: 'Video', accessor: 'thumbnail_url', sortable: false },
		{ label: 'Engagement', accessor: 'engagement', sortable: true },
		{ label: 'Views', accessor: 'view_count', sortable: true },
		{ label: 'Likes', accessor: 'like_count', sortable: true },
		{ label: 'Comments', accessor: 'comment_count', sortable: true },
		{ label: 'Posted', accessor: 'taken_at', sortable: true },
		{ label: 'Description', accessor: 'caption_text', sortable: false },
	]

	return (
		<section className="flex flex-col items-center justify-between gap-5 p-24">
			<h1 className="max-w-3xl text-center text-4xl font-bold text-landing-green md:text-7xl">
				Detailed Insights for the Provided URLs
			</h1>
			<p className="max-w-2xl text-center text-xl text-paragraph-color md:text-4xl">
				Latest insights for the Instagram posts
			</p>
			<div className="mt-10 w-full overflow-x-auto shadow-md sm:rounded-lg">
				<Table {...{ columns, data }} />
			</div>
		</section>
	)
}
