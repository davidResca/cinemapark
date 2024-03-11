import React from "react";
import { useRouteError, Link } from "react-router-dom";
const NotFound404 = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl font-bold gap-2">
      <div>NotFound404</div>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
      <p>{error.message}</p>

      <Link to="/" className="border bg-green-400 text-3xl rounded-xl p-2">
        Volver a Home
      </Link>
    </div>
  );
};

export default NotFound404;
