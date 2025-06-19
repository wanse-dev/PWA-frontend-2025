export function TwitterFollowCard ({ }) {
 return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt='El avatar del usuario'
                src='https://unavatar.io/midudev'
            />
            <div className='tw-followCard-info'>
                <strong>name</strong>
                <span className='tw-followCard-infoUserName'>username</span>
            </div>
        </header>

        <aside>
            <button>
                <span className='tw-followCard-text'>text</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}