import { CoefficientsMatrix } from "@/@types/coefficients";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  сoeffMatrix: CoefficientsMatrix;
}

export const VectorValues: React.FC<Props> = ({ сoeffMatrix }) => {
  return (
    <>
      <h2 className="text-xl mt-7">Значения векторов</h2>
      <Table className="w-[300px]">
        <TableBody>
          <TableRow>
            <TableCell>i(номер узла сетки)</TableCell>
            {сoeffMatrix.h.slice(0, сoeffMatrix.h.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.id}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              h<sub>i</sub>
            </TableCell>
            {сoeffMatrix.h.slice(0, сoeffMatrix.h.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              A<sub>i</sub>
            </TableCell>
            <TableCell></TableCell>
            {сoeffMatrix.A.slice(0, сoeffMatrix.A.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              B<sub>i</sub>
            </TableCell>
            <TableCell></TableCell>
            {сoeffMatrix.B.slice(0, сoeffMatrix.B.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              C<sub>i</sub>
            </TableCell>
            <TableCell></TableCell>
            {сoeffMatrix.C.slice(0, сoeffMatrix.C.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              D<sub>i</sub>
            </TableCell>
            <TableCell></TableCell>
            {сoeffMatrix.D.slice(0, сoeffMatrix.D.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              E<sub>i</sub>
            </TableCell>
            <TableCell></TableCell>
            {сoeffMatrix.E.slice(0, сoeffMatrix.E.length - 1).map((item) => (
              <TableCell className="text-center" key={item.id}>
                {item.value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
