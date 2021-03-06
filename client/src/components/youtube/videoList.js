import React from "react";
import Video from "./video";



export default function VideoList({ data, vidSelected , mySearchText }) {
  if (mySearchText === "Sorry, there are no videos for your search.") {
    return(
    <>
      <div style={{ padding: "20px 0" }}>
        <h3 className="isProject" style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>{mySearchText}</h3>
        <hr style={{height: "3px", background: "linear-gradient(to right, #ee0979, #ff6a00)", borderRadius: "3px", width: "60vw", marginTop: "20px"}} />
      </div>
    </>)
  } else
  return (
    <div className="vidList">
      <div style={{ padding: "20px 0" }}>
        <h3 className="isProject" style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>{mySearchText}</h3>
        <hr style={{height: "3px", background: "linear-gradient(to right, #ee0979, #ff6a00)", borderRadius: "3px", width: "60vw", marginTop: "20px"}} />
        <Video data={data} vidSelected={vidSelected} />

      </div>
    </div>
  );
};


