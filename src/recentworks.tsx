import './recentworks.css';
import Description from './recentworks/description';
import More from './recentworks/more';
import Moreworks from './recentworks/moreworks';
import Recents from './recentworks/recents';

function Recentworks(){
    return (
        <div>
        <div className="recents">
            <Description />
            <More />
        </div>
        <div>
            <Recents />
        </div>
        <div>
            <Moreworks />
        </div>
        </div>
    );
}

export default Recentworks;