// import React from "react";
// import { useTable } from "react-table";

// const data = [
//   { id: "g1", text: 'Do all exercises!' },
//   { id: "g2", text: 'Finish the course!' }
// ];


// const columns = [
//     {
//       Header: "Keys",
//       columns: [
//         {
//           Header: "id",
//           accessor: "id"
//         }
//       ]
//     },
//     {
//       Header: "Other Info",
//       columns: [
//         {
//           Header: "text",
//           accessor: "text"
//         }
//       ]
//     }
//   ];

//   const Table = ({ columns, data }) => {
//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       rows,
//       prepareRow
//     } = useTable({
//       columns,
//       data
//   });  
 
//   return (
//         <table {...getTableProps()}>
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row, i) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       );
//     };

//     export default function MyTable() {
//         return (
//           <div className="App">
//             <MyTable columns={columns} data={data} />
//           </div>
//         );
//       }    
    
