import './homepage.css';
import Recentworks from './recentworks';
import Landingpage from './landingpage';
import Projsachieves from './projsachieves';

function Homepage() {
    return (
        <div>
            <section className="landing-section">
                <Landingpage />
            </section>
            <section className="recentworks-section">
                <Recentworks />
            </section>
            <section className="projsachieves-section">
                <Projsachieves />
            </section>
        </div>
    );
}

export default Homepage;
