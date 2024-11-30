import { useRouteError } from "react-router-dom";

const Error = () => {
  //   const error: unknown = useRouteError();
  //   console.error(error);
  {
    /* {(error as Error)?.message || (error as { statusText?: string })?.statusText} */
  }

  const error: unknown = useRouteError();

  return (
    <>
      <h1>Error: {(error as Error)?.message}</h1>
      <pre>{(error as {status?: string})?.status} - {(error as {statusText?: string})?.statusText}</pre>
    </>
  );
};

export default Error;
