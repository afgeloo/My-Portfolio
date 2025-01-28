import './homepage.css';
import Recentworks from './recentworks';
import Landingpage from './landingpage';

function Homepage() {
    return (
        <div>
            <section className="landing-section">
                <Landingpage />
            </section>
            <section className="recentworks-section">
                <Recentworks />
            </section>
        </div>
    );
}

export default Homepage;
