"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  createCoeffMatrix,
  fastBackward,
  fastForward,
  hermiteSpline,
} from "@/lib";
import {
  Sa,
  Sb,
  Xstar,
  x,
  y,
  SaTest,
  SbTest,
  XstarTest,
  xTest,
  yTest,
} from "@/lib/constants";
import { Button } from "@/components/ui";
import {
  MatrixCoefficients,
  Splain,
  TableFastBackward,
  TableFastForward,
  ValueFunction,
  VectorValues,
} from "@/components/shared";
import Link from "next/link";

interface Props {
  id: string;
  className?: string;
}

export const Result: React.FC<Props> = ({ className, id }) => {
  const [isOpenSolution, setIsOpenSolution] = useState<boolean>(false);

  const values = {
    Sa: id === "1" ? Sa : SaTest,
    Sb: id === "1" ? Sb : SbTest,
    Xstar: id === "1" ? Xstar : XstarTest,
    x: id === "1" ? x : xTest,
    y: id === "1" ? y : yTest,
  };

  const onClickToggleSolution = () => {
    setIsOpenSolution(!isOpenSolution);
  };

  const сoeffMatrix = createCoeffMatrix(values.x, values.y, values.x.length);

  const resultFastForward = fastForward(
    сoeffMatrix.A,
    сoeffMatrix.B,
    сoeffMatrix.C,
    сoeffMatrix.D,
    сoeffMatrix.E,
    сoeffMatrix.h,
    values.y,
    values.Sa
  );

  const resultFastBackward = fastBackward(
    resultFastForward.alpha,
    resultFastForward.beta,
    values.Sb
  );

  const builtHermiteSpline = hermiteSpline(
    values.x,
    values.Xstar,
    values.y,
    resultFastBackward,
    сoeffMatrix.h
  );
  return (
    <div className={cn(className)}>
      <Link
        href={`/equation/${id === "1" ? "test" : "1"}`}
        className="text-base mt-4 mr-2"
      >
        <Button className="text-base mt-4" variant={"outline"}>
          {id === "1" ? "Вперед" : "Назад"}
        </Button>
      </Link>
      <Button className="text-base mt-4" onClick={onClickToggleSolution}>
        {isOpenSolution ? "Отменить" : "Вычислить"}
      </Button>

      {isOpenSolution && (
        <>
          <VectorValues сoeffMatrix={сoeffMatrix} />
          <MatrixCoefficients сoeffMatrix={сoeffMatrix} />
          <TableFastForward fastForwardValue={resultFastForward} />
          <TableFastBackward fastBackwardValue={resultFastBackward} />
          <Splain
            x={values.x}
            y={values.y}
            fastBackwardValue={resultFastBackward}
            h={сoeffMatrix.h}
          />
          <ValueFunction
            hermiteSplineValue={builtHermiteSpline}
            xStar={values.Xstar}
          />
        </>
      )}
    </div>
  );
};
