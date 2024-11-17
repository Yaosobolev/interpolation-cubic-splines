import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  fastBackwardValue: number[];
}

export const TableFastBackward: React.FC<Props> = ({ fastBackwardValue }) => {
  return (
    <>
      <h2 className="text-xl mt-7">Результат прогонки назад</h2>
      <Table className="w-[300px]">
        <TableBody>
          <TableRow>
            <TableCell>i(номер узла сетки)</TableCell>
            {fastBackwardValue.map((_, index) => (
              <TableCell key={index}>{index}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              m<sub>i</sub>
            </TableCell>
            {fastBackwardValue.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
