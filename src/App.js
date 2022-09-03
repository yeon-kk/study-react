import axios from "axios";
import "./App.css";
import { Card } from "./components/Card.js";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { BtnModal } from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/recruit")
      .then((res) => {
        const tmp = [...res.data];
        setData(tmp);
        console.log(tmp);
      })
      .catch(() => {
        console.log("실패");
      });
  }, []);

  return (
    <div>
      <div>
        <div
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            margin: "0 24px",
          }}
        >
          잘나가는 개발자가 되어보세요.
        </div>
      </div>
      <div style={{ fontweight: "bold", margin: "10px 24px" }}>
        내가 접수한 채용 프로그램
      </div>
      <div style={{ display: "flex" }}>
        {data.map((data, i) => {
          return <Card data={data} />;
        })}
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        모달창
      </Button>

      <BtnModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
