import { useEffect, useState } from "react";

/** https://usehooks-ts.com/react-hook/use-is-client */
const useIsClient = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
};

export default useIsClient;
