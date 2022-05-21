import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  // let hr = document.querySelector("#hr");
  // let mn = document.querySelector("#mn");
  // let sc = document.querySelector("#sc");

  const [hh, setHh] = useState();
  const [mm, setMm] = useState();
  const [ss, setSs] = useState();
  const [hrs, setHrs] = useState();
  console.log(mm, ss, hrs);

  setInterval(() => {
    let day = new Date();
    setHh(day.getHours() * 30);
    setMm(day.getMinutes() * 6);
    setSs(day.getSeconds() * 6);
    setHrs(hh + mm / 12);
  }, [1000]);

  return (
    <div className="App">
      <div className="container">
        <div className="clock">
          <div
            className="circle"
            id="sc"
            style={{
              "--clr": "#04fc43",
              transform: `rotateZ(${ss}deg)`
            }}
          >
            <i></i>
          </div>
          <div
            className="circle circle2"
            id="mn"
            style={{ "--clr": "#fee800", transform: `rotateZ(${mm}deg)` }}
          >
            <i></i>
          </div>
          <div
            className="circle circle3"
            id="hr"
            style={{ "--clr": "#ff2972", transform: `rotateZ(${hrs}deg)` }}
          >
            <i></i>
          </div>
          <span style={{ "--i": "1" }}>
            <b>1</b>
          </span>
          <span style={{ "--i": "2" }}>
            <b>2</b>
          </span>
          <span style={{ "--i": "3" }}>
            <b>3</b>
          </span>
          <span style={{ "--i": "4" }}>
            <b>4</b>
          </span>
          <span style={{ "--i": "5" }}>
            <b>5</b>
          </span>
          <span style={{ "--i": "6" }}>
            <b>6</b>
          </span>
          <span style={{ "--i": "7" }}>
            <b>7</b>
          </span>
          <span style={{ "--i": "8" }}>
            <b>8</b>
          </span>
          <span style={{ "--i": "9" }}>
            <b>9</b>
          </span>
          <span style={{ "--i": "10" }}>
            <b>10</b>
          </span>
          <span style={{ "--i": "11" }}>
            <b>11</b>
          </span>
          <span style={{ "--i": "12" }}>
            <b>12</b>
          </span>
        </div>
      </div>
    </div>
  );
}
