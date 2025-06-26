import { RightPanel } from "./components/right_panel/RightPanel";
import { LeftPanel } from "./components/left_panel/LeftPanel";
import "./index.css";

function App() {
  return (
    <>
      <LeftPanel />
      <div className="test"></div>
      <RightPanel />
    </>
  );
}

export default App;
