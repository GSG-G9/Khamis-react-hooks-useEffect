import { useEffect, useState } from "react";

function Three() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const abortController = new AbortController()
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=FIJB0pDfspEtoikhPbUqtIQDpuSyujAK&q=${inputValue}`
    ,{signal:abortController.signal})
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log("error" + err.name));

      return () => abortController.abort()
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <div>
        {data.slice(0,10).map(({images:{original:{url}},id}) => 
        <img src={url} alt="oh" key={id}></img>
        )}
      </div>
      </div>
    </>
  );
}

export default Three;
