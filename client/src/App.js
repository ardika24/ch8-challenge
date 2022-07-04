import React, { useState } from "react";
import FormPlayer from "./pages/FormPlayer";
import SearchPlayer from "./pages/SearchPlayer";
import Nav from "react-bootstrap/Nav";
import "./App.css";

function App() {
  const [page, setPage] = useState("create-player");
  const handleClick = (page) => () => {
    setPage(page);
  };
  let pageComponent;
  if (page === "create-player")
    pageComponent = <FormPlayer formState="Create" isSubmitted={false} />;
  else if (page === "edit-player")
    pageComponent = <FormPlayer formState="Edit" isSubmitted={false} />;
  else if (page === "search-player")
    pageComponent = <SearchPlayer isSubmitted={false} />;
  return (
    <>
      <Nav className="justify-content-center mb-4" variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={handleClick("create-player")}>
            Create Player
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={handleClick("edit-player")}>
            Edit Player
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={handleClick("search-player")}>
            Search Player
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {pageComponent}
    </>
  );
}

export default App;
