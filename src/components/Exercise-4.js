import { useEffect, useState } from "react";

function Four() {
  const [inputValue, setInputValue] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(` https://robohash.org/${inputValue}`);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <div>
          {inputValue && <img src={img} alt="oh"></img>}
        </div>
      </div>
    </>
  );
}

export default Four;
