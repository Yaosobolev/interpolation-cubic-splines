import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  x: number[];
  y: number[];
  fastBackwardValue: number[];
  h: {
    value: number;
    id: number;
  }[];
}

export const Splain: React.FC<Props> = ({ x, y, fastBackwardValue, h }) => {
  return (
    <>
      <h2 className="text-xl mt-7">{`Нелокальный кубический сплайн для таблично заданной функции  на отрезке [${
        x[0]
      }; ${x[x.length - 1]}] имеет вид:`}</h2>
      <Table className="w-[300px]">
        <TableBody>
          {x.slice(0, x.length - 1).map((_, index) => (
            <TableRow
              key={index}
              className="flex items-center whitespace-nowrap"
            >
              <TableCell>
                {y[index]}
                <p className="inline">
                  (1 - 3&tau;<sup>2</sup> + 2&tau;<sup>3</sup>)
                </p>
              </TableCell>
              <TableCell>+</TableCell>
              <TableCell>
                {y[index + 1]}
                <p className="inline">
                  (3&tau;<sup>2</sup> - 2&tau;<sup>3</sup>)
                </p>
              </TableCell>
              <TableCell>+</TableCell>
              <TableCell>
                {fastBackwardValue[index]}
                <p className="inline"> * </p>
                {h[index].value.toString().slice(0, 5)}
                <p className="inline">
                  (&tau; - 2&tau;<sup>2</sup> + &tau;<sup>3</sup>)
                </p>
              </TableCell>
              <TableCell>+</TableCell>
              <TableCell>
                {fastBackwardValue[index + 1]}
                <p className="inline"> * </p>
                {h[index].value.toString().slice(0, 5)}
                <p className="inline">
                  (&tau;<sup>3</sup> - &tau;<sup>2</sup>)
                </p>
              </TableCell>
              <TableCell>
                <p>
                  x &isin; [{x[index]};{x[index + 1]}]
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
