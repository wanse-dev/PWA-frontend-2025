import { TwitterTrendingCard } from './TwitterTrendingCard.tsx';
import { trendings } from '../consts/trendings.ts';
import './WhatsHappening.css';

export const WhatsHappening = () => {
    return (
        <section className='tw-WhatsHappening'>
            <header>
                <h2>What's happening</h2>
            </header>
            {
                trendings.map(({ title, topic, posts }) => (
                    <TwitterTrendingCard
                        key={title}
                        topic={topic}
                        title={title}
                        posts={posts}
                    />
                ))
            }
        </section>
    )
}