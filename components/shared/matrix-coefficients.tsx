import { CoefficientsMatrix } from "@/@types/coefficients";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  сoeffMatrix: CoefficientsMatrix;
}

export const MatrixCoefficients: React.FC<Props> = ({ сoeffMatrix }) => {
  return (
    <>
      <h2 className="text-xl mt-7">
        C учетом вычисленных значений коэффициентов СЛАУ принимает вид:
      </h2>
      <Table className="w-[300px]">
        <TableBody>
          {сoeffMatrix.h
            .slice(0, сoeffMatrix.h.length - 2)
            .map((item, index) => (
              <TableRow key={item.id} className="flex items-center">
                <TableCell>
                  {сoeffMatrix.A[index].value}m<sub>{index}</sub>
                </TableCell>
                <TableCell>
                  {сoeffMatrix.B[index].value}m<sub>{index + 1}</sub>
                </TableCell>
                <TableCell>
                  {сoeffMatrix.C[index].value}m<sub>{index + 2}</sub>
                </TableCell>
                <TableCell>=</TableCell>
                <TableCell className="flex items-center gap-2 ">
                  {сoeffMatrix.D[index].value.toString().slice(0, 10)}
                  <div className="flex flex-col">
                    <span className="border-b">
                      f<sub>{index + 2}</sub>- f<sub>{index + 1}</sub>
                    </span>
                    <span>{item.value.toString().slice(0, 5)}</span>
                  </div>
                </TableCell>
                <TableCell className="flex items-center gap-2 ">
                  {сoeffMatrix.E[index].value.toString().slice(0, 10)}
                  <div className="flex flex-col">
                    <span className="border-b">
                      f<sub>{index + 1}</sub>- f<sub>{index}</sub>
                    </span>
                    <span>{item.value.toString().slice(0, 5)}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
