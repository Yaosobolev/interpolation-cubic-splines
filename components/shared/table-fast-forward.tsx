import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  fastForwardValue: {
    alpha: number[];
    beta: number[];
  };
}

export const TableFastForward: React.FC<Props> = ({ fastForwardValue }) => {
  return (
    <>
      <h2 className="text-xl mt-7">Результат прогонки вперед</h2>
      <Table className="w-[300px]">
        <TableBody>
          <TableRow>
            <TableCell>i(номер узла сетки)</TableCell>
            {fastForwardValue.alpha.map((_, index) => (
              <TableCell key={index}>{index}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <p>&alpha;</p>
            </TableCell>
            {fastForwardValue.alpha.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <p>&beta;</p>
            </TableCell>
            {fastForwardValue.beta.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
