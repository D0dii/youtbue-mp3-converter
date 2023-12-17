import { FormEvent, useRef, useState } from "react";
import useAxios from "./hooks/useAxios.tsx";
import { getYoutubeID } from "./utils.tsx";

export default function App() {
  const inputUrlRef = useRef<HTMLInputElement>(null);
  const [urlResult, setUrlResult] = useState(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputUrlRef && inputUrlRef.current) {
      const ID = getYoutubeID(inputUrlRef.current.value);

      if (ID) {
        const response = await useAxios(ID);
        setUrlResult(response.link);
        inputUrlRef.current.value = "";
      }
    }
  }

  return (
    <>
      <div className="container">
        <h1>Paste the link you want to convert</h1>
        <section className="main-section">
          <form className="form" onSubmit={handleSubmit}>
            <input
              ref={inputUrlRef}
              type="text"
              className="link-input"
              placeholder="Enter youtube film url"
            />
            <button className="search-btn">Search</button>
          </form>
          {urlResult ? (
            <a className="download-btn" href={urlResult}>
              Download
            </a>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
}
