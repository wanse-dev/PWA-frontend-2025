import { RightPanel } from "./components/right_panel/RightPanel";
import { CenterPanel } from "./components/center_panel/CenterPanel";
import { LeftPanel } from "./components/left_panel/LeftPanel";
import "./index.css";

function App() {
  return (
    <>
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </>
  );
}

export default App;
