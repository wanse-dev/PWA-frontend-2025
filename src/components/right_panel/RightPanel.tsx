import { WhoToFollow } from "./WhoToFollow.tsx";
import { WhatsHappening } from "./WhatsHappening.tsx";
import { Footer } from "./Footer";
import "./RightPanel.css";

export const RightPanel = () => {
  return (
    <aside>
      <WhatsHappening />
      <WhoToFollow />
      <Footer />
    </aside>
  );
};
