// import logo from './logo.svg';
import './App.css';

function App() {
  return (
  //   <p
  //   style={{
  //     fontSize: 100,
  //     textAlign: "center",
  //     fontFamily:
  //       '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
  //   }}
  // >
  //   Shhh... I'm sleeping
  // </p>
<div>
<div className="uppertab">
  <img
    src="https://pngimg.com/uploads/letter_r/letter_r_PNG93890.png"
    className="fancyletter"
    alt="R"
  />
  <div className="buttonPlacement">
    <button onclick="on()" className="onButton">
      On
    </button>
    <button onclick="off()" className="offButton">
      Off
    </button>
  </div>
</div>
<link rel="stylesheet" href="./index.css" />
<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Renzo -- TXT 2023 SEALS Leadership</title>
<h1>Renzo Basurco</h1>
<div className="pfp11">
<div className="whitecircle"> </div>
  <img src="./images/gear-icon-13.png" className="spin" alt="Spinning Gear" />
  <div>
    <img src="./images/250-Ho-Oh.webp" className="pfp-pic" alt="Profile" />
  </div>
</div>
<p id="header">
  Three leadership creeds that I applied after SCLA 2022 were:
</p>{" "}
<br />
<div className="creeds">
  <a href="./pages/creed1.js" className="creedstext">
    First Leadership Creed I pracitced
  </a>{" "}
  <br />
  <a href="./pages/creed2.js" className="creedstext">
    Second Leadership Creed I relearned
  </a>{" "}
  <br />
  <a href="./pages/creed3.js" className="creedstext">
    Third Leadership Creed, perhaps the most important
  </a>
</div>
</div>

  );
}

export default App;
