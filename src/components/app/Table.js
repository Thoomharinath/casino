import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import getUrl from './../../utils';

const columns = [
  { id: 'id', label: 'Id', minWidth: 60 },
  { id: 'slot1', label: 'Slot-1', minWidth: 60},
  {
    id: 'slot2',
    label: 'Slot-2',
    minWidth: 60,
   // align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'slot3',
    label: 'Slot-3',
    minWidth: 60,
   // align: 'right',
   // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'time',
    label: 'Time',
    minWidth: 60,
   // align: 'right',
    // format: (value) => value.toFixed(2),
  },
];





export default function HeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function createData(id,slot1, slot2, slot3,time) {
 
    return { id,slot1,slot2,slot3,time };
  }
  
  // const data=[{images:["/flower.jpg","/dot.jpg","/love.jpg"],time:864}]
  
  const data=JSON.parse(localStorage.getItem("resultData"))

  
  
  let rows=[]
  if(data!==null)
  {rows=data.map((each,index)=>  createData(index,
  <img src={getUrl(each.images[0])} alt="logo" width={50} height={50}/>,
  <img src={getUrl(each.images[1])} alt="logo" width={50} height={50}/>,
  <img src={getUrl(each.images[2])} alt="logo" width={50} height={50}/>, each.time),
  )
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <Paper sx={{ width: '60%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 240 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
