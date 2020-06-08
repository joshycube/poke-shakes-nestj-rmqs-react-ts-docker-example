import React from "react";

function Error({ error }: { error: any }) {
  return <div>{error.toString()}</div>;
}

export default Error;
