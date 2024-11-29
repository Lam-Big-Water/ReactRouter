// import { useRouteError } from "react-router-dom";

const NotFound = () => {
//   const error: unknown = useRouteError();
//   console.error(error);

  return (
    <div>
      <h1>
        Not Found
        {/* {(error as Error)?.message || (error as { statusText?: string })?.statusText} */}
      </h1>
    </div>
  );
};

export default NotFound;
