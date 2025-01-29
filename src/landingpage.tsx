import './homepage.css';
import Message from './landingpage/message.tsx';
import Gallery from './landingpage/gallery.tsx';
import Location from './landingpage/location.tsx';
import Header from './header.tsx';

function Landingpage() {
    return (
        <div>
            <Header />
            <div className="profile-content">
                <Message />
                <Gallery />
                <Location />
            </div>
        </div>
    );
}

export default Landingpage;
