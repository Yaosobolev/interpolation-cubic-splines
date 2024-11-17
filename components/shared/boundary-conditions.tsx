import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sa, Sb, Xstar, SaTest, SbTest, XstarTest } from "@/lib/constants";

interface Props {
  id: string;
}

export const BoundaryConditions: React.FC<Props> = ({ id }) => {
  const values = {
    Sa: id === "1" ? Sa : SaTest,
    Sb: id === "1" ? Sb : SbTest,
    Xstar: id === "1" ? Xstar : XstarTest,
  };
  return (
    <>
      <h2 className="text-xl">Граничные условия, значение точки x*</h2>
      <Table className="w-[300px]">
        <TableHeader>
          <TableRow>
            <TableHead>S`(a)</TableHead>
            <TableHead className="text-center">S`(b)</TableHead>
            <TableHead className="text-right">x*</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{values.Sa}</TableCell>
            <TableCell className="text-center">{values.Sb}</TableCell>
            <TableCell className="text-right">{values.Xstar}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
