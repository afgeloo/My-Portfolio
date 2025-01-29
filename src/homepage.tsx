import './homepage.css';
import Recentworks from './recentworks';
import Landingpage from './landingpage';
import Projsachieves from './projsachieves';
import Expskills from './expskills';

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
            <section className="expskills-section">
                <Expskills />
            </section>
        </div>
    );
}

export default Homepage;
