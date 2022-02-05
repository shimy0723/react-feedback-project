import Card from "../components/shared/Card";


function About() {
  return <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for product or service</p>
          <p>VersionL 1.0.0</p>

          <p>
              <a href="/">Back to Home</a>
          </p>
      </div>
    </Card>;
}

export default About;
