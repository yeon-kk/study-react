import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
export function BtnModal(props) {
  const [data, setData] = useState({});
  const text = {
    display: "inline-block",
    width: "52px",
  };
  function onChange(e) {
    var val = e.target.value;
    if (e.target.name == "position") {
      val = Number(e.target.value);
    } else if (e.target.name == "status") {
      val = Boolean(e.target.value);
    }
    const tmp = {
      [`${e.target.name}`]: val,
    };
    setData({ ...data, ...tmp });
  }
  function toServer() {
    setData({ id: 5, ...data });
    console.log("어라");
    axios
      .post("http://localhost:3001/recruit", data)
      .then(() => {
        console.log("성공");
      })
      .catch(() => {
        console.log("실패");
      });
  }
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">모달창</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>입력받기</h4>
          <span style={text}>제목</span>
          <input name="title" onChange={onChange}></input>
          <br></br>
          <span style={text}>포지션</span>
          <input name="position" onChange={onChange}></input>

          <br></br>
          <span style={text}>상태</span>
          <input name="status" onChange={onChange}></input>

          <br></br>
          <span style={text}>날짜</span>
          <input name="date" onChange={onChange}></input>

          <br></br>
          <span style={text}>썸네일</span>
          <input name="thumbnailImage" onChange={onChange}></input>

          <br></br>
          <span style={text}>결과</span>
          <input name="btnResult" onChange={onChange}></input>

          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <button type="submit" onClick={toServer}>
            제출
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
