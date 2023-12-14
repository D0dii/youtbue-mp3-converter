import { FormEvent, useRef } from "react";
import useAxios from "../hooks/useAxios.tsx";

export default function App() {
  const inputUrlRef = useRef();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(useAxios());
  };

  return (
    <>
      <div className="container">
        <h1>Paste the link you want to convert</h1>
        <section className="main-section">
          <form className="form" onSubmit={handleSubmit}>
            <input
              ref={inputUrlRef.current}
              type="text"
              className="link-input"
              placeholder="Enter youtube film url"
            />
            <button className="search-btn">Search</button>
          </form>
          <button className="download-btn">Download</button>
        </section>
      </div>
    </>
  );
}
