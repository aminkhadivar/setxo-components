import { createContext, useContext } from 'react'
import './Table.css'

const TableContext = createContext()

const Table = ({ children, className = '', color = '', striped = '', divided = '', hoverable = '' , rounded = '', ...props }) => {

    const colorClass = {
        light: 'table-light',
        gray: 'table-gray',
        dark: 'table-dark',
        primary: 'table-primary',
        success: 'table-success',
        danger: 'table-danger',
        warning: 'table-warning',
        info: 'table-info',
        purple: 'table-purple',
    }[color]

    return (
        <TableContext.Provider value={{ className, children, striped, color, divided, hoverable }}>
            {/* <div className="flex flex-wrap overflow-x-auto"> */}
                <table {...props} className={`table` + `${color && ` ` + colorClass}` + `${color ? (striped && ` table-striped`) : (striped && ` table-striped-default`)}` + `${hoverable && ` table-hover`}` + `${rounded && ` rounded-lg`}`}>
                    {children}
                </table>
            {/* </div> */}
        </TableContext.Provider>
    )
}

const TableHead = ({ children, key }) => {

    return (
        <thead className="group/head">
            <tr key={key}>
                {children}
            </tr>
        </thead>
    )
}

const TableHeadCell = ({ children, key }) => {

    const color = useContext(TableContext)
    let colorValue = color.color

    const divided = useContext(TableContext)
    let dividedValue = divided.divided

    const colorHeadClass = {
        light: 'table-head-light',
        gray: 'table-head-gray',
        dark: 'table-head-dark',
        primary: 'table-head-primary',
        success: 'table-head-success',
        danger: 'table-head-danger',
        warning: 'table-head-warning',
        info: 'table-head-info',
        purple: 'table-head-purple',
    }[colorValue]

    return (
        <th className={`table-head` + `${colorValue && ` ` + colorHeadClass}` + ` ${!colorValue && dividedValue && ' table-head-defualt'}`} key={key}>
            {children}
        </th>
    )
}

const TableBody = ({ children }) => {

    const color = useContext(TableContext)
    let colorValue = color.color

    const divided = useContext(TableContext)
    let dividedValue = divided.divided

    const colorDivideClass = {
        default: 'table-divided-default',
        light: 'table-divided-light',
        gray: 'table-divided-gray',
        dark: 'table-divided-dark',
        primary: 'table-divided-primary',
        success: 'table-divided-success',
        danger: 'table-divided-danger',
        warning: 'table-divided-warning',
        info: 'table-divided-info',
        purple: 'table-divided-purple',
    }[color.color]

    return (
        <tbody className={`table-body group/body` + `${colorValue ? (dividedValue && ` ` + colorDivideClass) : (dividedValue && ` table-divided-default`)}`}>
            {children}
        </tbody>
    )
}
const TableRow = ({ children, key }) => {

    return (
        <tr className={`table-row group/row`} key={key}>
            {children}
        </tr>
    )
}
const TableCell = ({ children, key }) => {

    return (
        <td className={`table-cell`} key={key}>
            {children}
        </td>
    )
}

Table.Head = TableHead
Table.HeadCell = TableHeadCell
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table