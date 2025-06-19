import './TwitterTrendingCard.css';

interface TwitterTrendingCardProps {
    topic: string,
    title: string,
    posts: number
}

export const TwitterTrendingCard = ({ topic, title, posts }: TwitterTrendingCardProps) => {
    return (
        <article className='tw-trendingCard'>
            <header className='tw-trendingCard-header'>
                <span className='tw-trendingCard-topic'>
                    {topic}
                </span>
                <span className='tw-trendingCard-title'>
                    <strong>{title}</strong>
                </span>
                <span className='tw-trendingCard-posts'>
                    {posts} posts
                </span>
            </header>

            <aside>
                <a className='tw-trendingCard-options' href="#">...</a>
            </aside>
        </article>
    )
}