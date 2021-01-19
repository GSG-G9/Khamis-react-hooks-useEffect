import { useEffect, useState } from "react";

function One() {
  const [Count, setCount] = useState(1);

  const Increment = () => {
    setCount((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    console.log("UseEffect");
    document.addEventListener("mousedown", Increment);

    return () => {
      console.log("cleanUp");
      document.removeEventListener("mousedown", Increment);
    };
  }, [Count]);

  return (
    <>
      <button onClick={Increment}>Increment + </button>
      <p>Count is: {Count}</p>
    </>
  );
}

export default One;
