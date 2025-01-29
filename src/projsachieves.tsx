import './projsachieves.css';
import Achieves from './projsachieves/achieves';
import Projs from './projsachieves/projs';

function Projsachieves(){
    return (
        <div>
            <div>
                <p className="projsdesc">PROJECTS AND ACHIEVEMENTS</p>
            </div>
            <div className="projsachievesgallery">
                <Projs />
                <Achieves />
            </div>
        </div>
    );
}

export default Projsachieves;