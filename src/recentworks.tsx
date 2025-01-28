import './recentworks.css';
import Description from './recentworks/description';
import More from './recentworks/more';


function Recentworks(){
    return (
        <div className="recents">
            <Description />
            <More />
        </div>
    );
}

export default Recentworks;