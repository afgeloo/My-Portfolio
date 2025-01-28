import './recentworks.css';
import Description from './recentworks/description';
import More from './recentworks/more';
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
        </div>
    );
}

export default Recentworks;