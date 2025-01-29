import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>error aa gya</h1>
      <h1>
        Error {err.status} : {err.statusText}
      </h1>
    </>
  );
};
export default Error;
