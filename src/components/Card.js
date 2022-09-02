export function Card(props) {
  function btnRes(result) {
    if (result == "종료") {
      return { color: "gray" };
    }
    return;
  }
  return (
    <div>
      <div className="card">
        <div className="thumbnail">
          <img className="thumbnail-img" src={props.data.thumbnailImage} />
        </div>
        <div className="card-contents">
          <div className="card-title">{props.data.title}</div>
          <div className="position-contents">
            <div
              style={{ fontWeight: "bold", width: "6.5rem", fontSize: "small" }}
            >
              지원한 포지션
            </div>
            <div className="position">{props.data.position}개</div>
          </div>
          <div className="status-contents">
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                width: "6.5rem",
                fontSize: "small",
              }}
            >
              지원상태
            </div>
            <div className="status">
              {props.data.status ? "지원완료" : "불합격"}
            </div>
          </div>
          <div className="line" />
          <div
            style={{
              fontSize: "small",
              fontWeight: "bold",
              display: "inline-block",
              padding: "0 0 10px",
            }}
          >
            시험일
          </div>
          <div className="date">{props.data.date}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="testButton" style={btnRes(props.data.btnResult)}>
              {props.data.btnResult}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
