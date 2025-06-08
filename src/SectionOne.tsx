import './Sections.css';

function SectionOne() {

    return (
        <div className='sectionWrapper'>
            <div className='sectionAbove'>
                <h1>Section one</h1>
            </div>
            <div className='sectionMiddle'>
                <p>section body</p>
            </div>
            <div className='sectionBelow'>
                <button>Update info</button>
                <button>Change theme</button>
            </div>
        </div>
    )
}

export default SectionOne;