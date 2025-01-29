import './expskills.css';
import Wordcloud from './expskills/wordcloud';

function Expskills(){
    return (
        <div>
            <div>
                <p className="expdesc">EXPERIENCES AND SKILLS</p>
            </div>
                <div className="expskills">
                    <Wordcloud />
                </div>
        </div>
    );
}

export default Expskills;