import { useState } from 'react';
import './TwitterFollowCard.css';

interface TwitterFollowCardProps {
    children: any,
    userName: string,
    initialIsFollowing: boolean
}

export function TwitterFollowCard (props:TwitterFollowCardProps) {
  const [isFollowing, setIsFollowing] = useState(props.initialIsFollowing);

  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
 return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt='El avatar del usuario'
                src={`https://unavatar.io/${props.userName}`}
            />
            <div className='tw-followCard-info'>
                <strong>{props.children}</strong>
                <span className='tw-followCard-infoUserName'>@{props.userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Unfollow</span>
            </button>
        </aside>
    </article>
  )
}