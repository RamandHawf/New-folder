import TableHead from './table-head'
import TableBody from './table-body'
import { useSortableTable } from 'hooks/use-sortable-table'

export default ({ data, columns }) => {
	const [tableData, handleSorting] = useSortableTable(data)

	return (
		<>
			<table className="w-full table-fixed text-left text-sm text-gray-500">
				<TableHead {...{ columns, handleSorting }} />
				<TableBody {...{ columns, tableData }} />
			</table>
		</>
	)
}
