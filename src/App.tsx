import "./App.scss";
import Tooltip from "./components/ui/Tooltip";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>내가 필요해서 만든 툴팁</h1>
      <h2 className="anchor">Default</h2>
      <div className="gt-panel">
        <div className="gt-panel-header">
          <div className="circles">
            <span className="circle circle-red"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-green"></span>
          </div>
        </div>
        <div className="gt-panel-body gt-center">
          <Tooltip label="안녕하세요">
            <button className="gt-button gt-button-primary">
              툴팁 버튼 😀
            </button>
          </Tooltip>
        </div>
      </div>

      <h2 className="anchor">Position Variant</h2>
      <div className="gt-panel">
        <div className="gt-panel-header">
          <div className="circles">
            <span className="circle circle-red"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-green"></span>
          </div>
        </div>
        <div className="gt-panel-body gt-center">
          <Tooltip label="안녕하세요" position="left">
            <button className="gt-button gt-button-primary">
              position="left" 👈
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="top">
            <button className="gt-button gt-button-secondary">
              position="top" 👆
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom">
            <button className="gt-button gt-button-success">
              position="bottom" 👇
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="right">
            <button className="gt-button gt-button-danger">
              position="right" 👉
            </button>
          </Tooltip>

          <Tooltip label="안녕하세요" position="top-start">
            <button className="gt-button gt-button-primary">
              position="top-start" 👆👈
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="top-end">
            <button className="gt-button gt-button-secondary">
              position="top-end" 👆👉
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom-start">
            <button className="gt-button gt-button-success">
              position="bottom-start" 👇👈
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" position="bottom-end">
            <button className="gt-button gt-button-danger">
              position="bottom-end" 👇👉
            </button>
          </Tooltip>
        </div>
      </div>

      <h2 className="anchor">Tooltip Background</h2>
      <div className="gt-panel">
        <div className="gt-panel-header">
          <div className="circles">
            <span className="circle circle-red"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-green"></span>
          </div>
        </div>
        <div className="gt-panel-body gt-center">
          <Tooltip label="안녕하세요" background="crimson">
            <button className="gt-button gt-button-primary">
              background="crimson"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" background="violet">
            <button className="gt-button gt-button-secondary">
              background="violet"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" background="darkblue">
            <button className="gt-button gt-button-success">
              background="darkblue"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" background="peru">
            <button className="gt-button gt-button-danger">
              background="peru"
            </button>
          </Tooltip>
        </div>
      </div>

      <h2 className="anchor">Font Color</h2>
      <div className="gt-panel">
        <div className="gt-panel-header">
          <div className="circles">
            <span className="circle circle-red"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-green"></span>
          </div>
        </div>
        <div className="gt-panel-body gt-center">
          <Tooltip label="안녕하세요" color="khaki">
            <button className="gt-button gt-button-primary">
              color="khaki"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" color="violet">
            <button className="gt-button gt-button-secondary">
              color="violet"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" color="skyblue">
            <button className="gt-button gt-button-success">
              color="skyblue"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" color="aliceblue">
            <button className="gt-button gt-button-danger">
              color="aliceblue"
            </button>
          </Tooltip>
        </div>
      </div>

      <h2 className="anchor">FontSize</h2>
      <div className="gt-panel">
        <div className="gt-panel-header">
          <div className="circles">
            <span className="circle circle-red"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-green"></span>
          </div>
        </div>
        <div className="gt-panel-body gt-center">
          <Tooltip label="안녕하세요" fontSize="20px">
            <button className="gt-button gt-button-primary">
              fontSize="20px"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" fontSize="30px">
            <button className="gt-button gt-button-secondary">
              fontSize="30px"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" fontSize="40px">
            <button className="gt-button gt-button-success">
              fontSize="40px"
            </button>
          </Tooltip>
          <Tooltip label="안녕하세요" fontSize="50px">
            <button className="gt-button gt-button-danger">
              fontSize="50px"
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
