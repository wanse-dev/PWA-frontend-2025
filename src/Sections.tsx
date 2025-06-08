import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import './Sections.css';

function Sections () {
    return (
        <div id='SectionsRoot'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export default Sections;