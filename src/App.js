import './App.css';
import fakeData from './MOCK_DATA.json';
import * as React from 'react';
import { useTable } from 'react-table';

function App() {

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Gender',
      accessor: 'gender'
    },
    {
      Header: 'University',
      accessor: 'university'
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="App">
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps}>
                {headerGroup.headers.map((column) => (
                  
                ))}
              </tr>
            ))}
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
