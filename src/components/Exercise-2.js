import { useEffect, useState } from "react";

function Two() {
  const [color, setColor] = useState("");
  const [scale, setScale] = useState({ X: "", Y: "" });

  useEffect(() => {
    document.addEventListener("mousemove", measure);

    return () => {
      document.removeEventListener("mousemove", measure);
    };
  }, []);

  const measure = (e) => {
    const X = e.screenX;
    const Y = e.screenY;
    setScale({ X, Y });
    if (X > window.innerWidth / 2) {
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  return (
    <div style={{ background: color, width: "100%", height: "90vh" }}>
      <p>
        I am now on X:{scale.X} and Y:{scale.Y}
      </p>
    </div>
  );
}

export default Two;
