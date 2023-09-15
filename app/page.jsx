'use client'
// import Table from '@/info/table'
import classNames from 'classnames'
import { useState } from 'react'
import axios from "axios"
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper,Button } from '@mui/material';


export default () => {
	const [fields, setFields] = useState(1)
	const [data, setinfo] = useState([])
	const [loading, setLoading] = useState(false)
	const [url,seturl] = useState("")
	const [postId, setPostId] = useState('');
	// const [data,setdata]= useState([]);
	const generateFields = () => {
		let fieldElm = []

		for (let i = 0; i < fields; i++) {
			fieldElm.push(<URLInput key={i} />)
		}

		return fieldElm
	}

	const columns = [
		{ label: 'Thumbnail', accessor: 'thumbnail_url', sortable: false },
		//{ label: 'Engagement', accessor: 'engagement', sortable: true },
		{ label: 'Username', accessor: 'username', sortable: false },
		{ label: 'Views', accessor: 'view_count', sortable: true },
		{ label: 'Likes', accessor: 'like_count', sortable: true },
		{ label: 'Shares', accessor: 'share_count', sortable: true },
		{ label: 'Comments', accessor: 'comment_count', sortable: true },
		{ label: 'Saves', accessor: 'save_count', sortable: true },
		{ label: 'Posted', accessor: 'taken_at', sortable: true },
		{ label: 'Description', accessor: 'caption_text', sortable: false },
	]

	console.log(url)

	const handleclear =() =>{
        // e.preventdefault()
        seturl('')
        setPostId('')
        setinfo([])
    }
	const handleInstagramURLs = async ev => {


		ev.preventDefault()
		
		setLoading(true)
		console.log("Data is ")
        const urlPattern = /\/p\/([A-Za-z0-9_-]+)/;
        const match = url.match(urlPattern);
    
		if (match) {
			// The first captured group (match[1]) contains the post ID
			const extractedId = match[1];
			console.log("Data is ",extractedId)
			setPostId(extractedId);
			console.log(postId.toString())
			let config = {
			  method: 'get',
			  maxBodyLength: Infinity,
			  url: `${process.env.NEXT_PUBLIC_API_URL}/data?post_url=${extractedId}`,
			  headers: { }
			};
			console.log(config)
			axios.request(config)
			.then((response) => {
			  console.log(JSON.stringify(response.data));

			  if(response.data)
			  {
				setinfo(response.data)
			}else
			{setLoading(false)}
	
			
			  

			})
			.catch((error) => {
			  console.log(error);
			});
			
		  } else {
			setPostId('Invalid URL');
		  }
		// const elms = ev.target.ig_url
		// const urls = []
		// let u = elms.value

		//for (const url of elms) {
		//	u = url.value
		//	urls.push(url.value)
		//}

		// const req = await fetch(`http://localhost:8000/get_instagram_data?post_url=${postid}`, {
		// 	method: 'GET',
		// 	// body: JSON.stringify({ url: u }),
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	next: { revalidate: 0 },
		// 	cache: 'no-store',
		// }).then((th)=>{console.log(th)}).catch((e)=>{
        //  console.log(e)
		// })

		// const content = await req.json()
        
		// console.log(content)

		// if (content) {
		// 	setInfo(content)
		// }

		// setLoading(false)
	}

	const URLInput = () => (
		<input
			type="text"
			placeholder="Paste URL here"
			name="ig_url"
			className="rounded border p-3 text-base shadow"
		/>
	)

	return (
		<section className="flex flex-col items-center justify-between gap-5 p-8 md:p-14 lg:p-24">
		  {Object.keys(data).length >  0  ? (
			// Content to display when data is available
			<div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
			  <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-around" }}>
				<h1>Your Post Url Scrapped Data is Showing Below</h1>
				<Button sx={{ backgroundColor: "white" }} onClick={handleclear}>Clear Table Data</Button>
			  </div>
			  {Object.keys(data).length > 0 ? (
				<TableContainer component={Paper}>
				  <Table>
					<TableHead>
					  <TableRow>
					  <TableCell>Media ID</TableCell>
            <TableCell>Owner ID</TableCell>
            <TableCell>Likes Count</TableCell>
            <TableCell>Comments Count</TableCell>
            <TableCell>Save Count</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  
						<TableRow >
						<TableCell>{data.meta_data.instagram_media_id}</TableCell>
            <TableCell>{data.meta_data.instagram_media_owner_id}</TableCell>
            <TableCell>{data.Likes_count}</TableCell>
            <TableCell>{data.comments_count}</TableCell>
            <TableCell>{data.save_count}</TableCell>
						</TableRow>
					  
					</TableBody>
				  </Table>
				</TableContainer>
			  ) : (
				<p>No data available.</p>
			  )}
			</div>
		  ) : (
			// Content to display when data is not available
			<>
			  <h1 className="max-w-3xl text-center text-4xl font-bold text-landing-green md:text-7xl">
				Get the analytics for social media posts with only their links
			  </h1>
			  <p className="max-w-2xl text-center text-xl text-paragraph-color md:text-3xl">
				Real-time engagement metrics for public Instagram posts are one click away
			  </p>
			  <div className="w-full max-w-3xl rounded-md border p-3">
				<h3 className="text-center text-2xl font-bold">Add Instagram links here</h3>
				<form onSubmit={handleInstagramURLs}>
				  <div className="mt-8 flex flex-col space-y-3">
					<input type='text' placeholder='Post url' onChange={() => { seturl(event.target.value) }} />
					{/* {generateFields()} */}
				  </div>
				  <div className="mt-5 grid grid-cols-2 gap-y-4 md:row-start-1 md:gap-y-0">
					<div className="col-span-full grid space-x-3 md:col-span-1 md:flex">
					  <button
						type="button"
						className="cursor-not-allowed rounded border bg-gray-500 px-3 py-2 text-base text-white"
						disabled
					  >
						Add +
					  </button>
					  <button
						type="button"
						className="col-start-2 cursor-not-allowed rounded border bg-gray-500 px-3 py-2 text-base text-white md:col-start-1"
					  >
						Bulk Add
					  </button>
					</div>
					<button
					  type="submit"
					  className={classNames(
						'col-span-full rounded border px-3 py-2 text-lg text-white md:col-start-2 md:row-start-1 md:text-base',
						{
						  'border-green-400 bg-gray-500': loading,
						  'border-green-400 bg-green-600': !loading,
						},
					  )}
					  >
					  {"Get your Socialytics"}
					  
					</button>
				  </div>
				</form>
			  </div>
			</>
		  )}
		</section>
	  )
					}	  