import { useState } from 'react'

export default ({ columns, handleSorting }) => {
	const [sortField, setSortField] = useState('')
	const [order, setOrder] = useState('asc')

	const handleSortingChange = accessor => {
		const sortOrder =
			accessor === sortField && order === 'asc' ? 'desc' : 'asc'
		setSortField(accessor)
		setOrder(sortOrder)
		handleSorting(accessor, sortOrder)
	}

	return (
		<thead className="bg-gray-50 text-xs uppercase text-gray-700">
			<tr>
				{columns.map(({ label, accessor, sortable }) => {
					return (
						<th
							scope="col"
							className="w-[200px] px-6 py-3"
							key={accessor}
							onClick={
								sortable
									? () => handleSortingChange(accessor)
									: null
							}>
							{label}
							{sortable && (
								<a href="#">
									<svg
										className="ml-1.5 inline h-3 w-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
									</svg>
								</a>
							)}
						</th>
					)
				})}
			</tr>
		</thead>
	)
}
