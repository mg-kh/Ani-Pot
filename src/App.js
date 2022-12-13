import { useState } from "react";
import ReactAnimate from "./components/ReactAnimate";
function App() {
  const [animation, setAnimation] = useState("bounce");
  const [duration, setDuration] = useState("animation--0-5");
  const [iteration, setIterations] = useState("animation-iteration--1");
  const animations = [
    "bounce",
    "slide_top",
    "slide_left",
    "slide_bottom",
    "slide_right",
    "fade",
    "zoom",
    "shake",
  ];
  const durations = [
    "animation--0-5",
    "animation--1",
    "animation--1-5",
    "animation--2",
    "animation--2-5",
    "animation--3",
    "animation--3-5",
    "animation--4",
  ];
  const iterations = [
    "animation-iteration--1",
    "animation-iteration--2",
    "animation-iteration--3",
    "animation-iteration--4",
    "animation-iteration--infinite ",
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div className="setting_bar--container">
            <select
              onChange={(e) =>
                setAnimation(() => {
                  return e.target.value;
                })
              }
            >
              {animations?.map((animation) => (
                <option value={animation}>{animation}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                setDuration(() => {
                  return e.target.value;
                })
              }
            >
              {durations?.map((animation) => (
                <option value={animation}>{animation}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                setIterations(() => {
                  return e.target.value;
                })
              }
            >
              {iterations?.map((animation) => (
                <option value={animation}>{animation}</option>
              ))}
            </select>
          </div>
          <div>
            {/* <ReactAnimate className={animation}>
              <h1>Hello Animation!</h1>
              <div className="box"></div>
            </ReactAnimate> */}

            <ReactAnimate className={`${animation} ${duration} ${iteration}`}>
              <button className="button">Button</button>
            </ReactAnimate>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
