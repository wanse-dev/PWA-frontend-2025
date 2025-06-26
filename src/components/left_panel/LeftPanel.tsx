import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { user } from "../../consts/user";
import "./LeftPanel.css";

export const LeftPanel = () => {
  return (
    <nav>
      <Navigation />
      <Profile key={user.userName} userName={user.userName}>
        {user.name}
      </Profile>
    </nav>
  );
};
