interface Props {
  hermiteSplineValue?: number;
  xStar: number;
}

export const ValueFunction: React.FC<Props> = ({
  hermiteSplineValue,
  xStar,
}) => {
  return (
    <>
      <h2 className="text-xl mt-7">{`Значение функции в точке х*=${xStar}`}</h2>
      Sc({`${xStar}`}) = {hermiteSplineValue}
    </>
  );
};
