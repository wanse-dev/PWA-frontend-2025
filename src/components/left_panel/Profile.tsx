import "./Profile.css";

interface ProfileProps {
  userName: string;
  children: any;
}

export const Profile = (props: ProfileProps) => {
  return (
    <section>
      <div className="tw-profile">
        <img
          className="tw-profile-avatar"
          alt="El avatar del usuario"
          src={`https://unavatar.io/${props.userName}`}
        />
        <div className="tw-profile-info">
          <strong>{props.children}</strong>
          <span className="tw-profile-infoUserName">@{props.userName}</span>
        </div>
      </div>
      <div className="tw-profile-options">
        <a href="#options">...</a>
      </div>
    </section>
  );
};
