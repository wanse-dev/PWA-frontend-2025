import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="tw-navigation">
      <ul>
        <li>
          <a href="#x">X</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#notifications">Notifications</a>
        </li>
        <li>
          <a href="#messages">Messages</a>
        </li>
        <li>
          <a href="#grok">Grok</a>
        </li>
        <li>
          <a href="#communities">Communities</a>
        </li>
        <li>
          <a href="#premium">Premium</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#more">More</a>
        </li>
        <li>
          <a className="tw-post-btn" href="#post">
            Post
          </a>
        </li>
      </ul>
    </div>
  );
};
