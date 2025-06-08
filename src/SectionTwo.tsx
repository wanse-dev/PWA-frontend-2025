import './Sections.css';

function SectionTwo() {

    return (
        <div className='sectionWrapper'>
            <div className='sectionAbove'>
                <h1>Section two</h1>
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

export default SectionTwo;