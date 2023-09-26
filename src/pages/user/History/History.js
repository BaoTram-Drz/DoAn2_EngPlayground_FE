
import {HistoryContainer, Table, TableRow, TableCellLeft, TableCellRight} from './History.styled'
import data from './data.json'


function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
}

function History() {
  return (
    <HistoryContainer>
      <Table>
        <tbody>
          {data.tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCellLeft>{truncateText(row.category, 70)}</TableCellLeft>
              <TableCellRight>{row.complete}</TableCellRight>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </HistoryContainer>
  );
};

export default History;
