import './projsachieves.css';
import Achieves from './projsachieves/achieves';
import Projs from './projsachieves/projs';

function Projsachieves(){
    return (
        <div>
            <div className="projsachievesgallery">
                <Projs />
                <Achieves />
            </div>
        </div>
    );
}

export default Projsachieves;