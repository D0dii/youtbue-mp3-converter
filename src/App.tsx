import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Paste the link you want to convert</h1>
        <section className="main-section">
          <form className="form">
            <input type="text" className="link-input" />
            <button className="search-btn">Search</button>
          </form>
          <button className="download-btn">Download</button>
        </section>
      </div>
    </>
  );
}

export default App;
