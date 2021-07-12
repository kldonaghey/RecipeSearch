import { useMemo } from 'react';
import {useTable, useFilters } from 'react-table';

/*const tableData = useMemo(
    () => [
        {
            //first group - Ingredients
            Header: "Ingredients",
            columns: [
                {
                    Header: "strIngredient"
                }
            ]
        }
        
    ]
)*/

export default function Table({ columns, data }) {
    
    const{
        getTableProps,
        getTableBodyProps,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });
    return(
        <table {...getTableProps()}>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
} 

