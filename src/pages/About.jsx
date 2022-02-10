import Card from "../components/shared/Card";
import { Link } from 'react-router-dom'


function About() {
  return <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for product or service</p>
          <p>VersionL 1.0.0</p>
          <p>
              <Link to={{
                  pathname: '/'
              }}>Back to Home</Link>
          </p>
      </div>
    </Card>;
}

export default About;
