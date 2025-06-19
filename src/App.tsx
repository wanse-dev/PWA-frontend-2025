import { TwitterFollowCard } from './components/TwitterFollowCard.tsx';
import { users } from './consts/users.ts';
import './App.css';

function App() {
  return (
    <section className='WhoToFollow'>
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


export default App;
