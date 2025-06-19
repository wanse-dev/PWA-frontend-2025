import { TwitterFollowCard } from './TwitterFollowCard.tsx';
import { users } from '../consts/users.ts';
import './WhoToFollow.css';

export const WhoToFollow = () => {
    return (
        <section className='tw-whoToFollow'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}