import { Children } from "react";
const Supermercado = ({ children, nome }) => {
  return (
    <>
      <h1>Supermercado do {nome}</h1>
      {Children.map(children, (filho) => {
        return <div style={{ backgroundColor: "red" }}>{filho}</div>;
      })}
    </>
  );
};
const Legume = ({ nome }) => {
  return (
    <>
      <h1>Legume {nome}</h1>
    </>
  );
};
const Bebida = ({ nome }) => {
  return (
    <>
      <h1>Bebida {nome}</h1>
    </>
  );
};
export { Supermercado, Legume, Bebida };
