import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home.tsx";
import { Explore } from "../../pages/explore/Explore.tsx";
import { Notifications } from "../../pages/notifications/Notifications.tsx";
import { Messages } from "../../pages/messages/Messages.tsx";
import { Grok } from "../../pages/grok/Grok.tsx";
import { Communities } from "../../pages/communities/Communities.tsx";
import { Premium } from "../../pages/premium/Premium.tsx";
import { Profile } from "../../pages/profile/Profile.tsx";
import { More } from "../../pages/more/More.tsx";
import { Post } from "../../pages/post/Post.tsx";
import "./CenterPanel.css";

export const CenterPanel = () => {
  return (
    <main className="center-panel">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/grok" element={<Grok />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </main>
  );
};