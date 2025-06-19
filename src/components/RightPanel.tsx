import { WhoToFollow } from "./WhoToFollow";
import { Footer } from "./Footer";
import './RightPanel.css';

export const RightPanel = () => {
    return (
        <aside>
            <WhoToFollow />
            <Footer />
        </aside>
    )
}