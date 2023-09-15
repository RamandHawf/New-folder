import Image from 'next/image'

export default ({ tableData, columns }) => {
	return (
		<tbody>
			{tableData.map(data => {
				return (
					<tr key={data.id} className="border-b bg-white">
						{columns.map(({ accessor }) => {
							if (
								accessor === 'thumbnail_url' &&
								data[accessor] === null
							) {
								data[accessor] = data['resources'][0][accessor]
							}

							if (accessor === 'username') {
								data[accessor] = '@' + data['user'][accessor]
							}

							const tData = data[accessor] ?? '——'

							return (
								<td
									className="relative max-w-xs px-6 py-4"
									key={accessor}>
									{accessor === 'thumbnail_url' &&
									tData !== '——' ? (
										<Image
											src={tData}
											width={150}
											height={300}
											alt={data.user.username}
											style={{ objectFit: 'contain' }}
										/>
									) : (
										tData
									)}
								</td>
							)
						})}
					</tr>
				)
			})}
		</tbody>
	)
}
