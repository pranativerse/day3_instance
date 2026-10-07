import { useState } from "react";
import "./App.css";

function App() {
  const [deployed, setDeployed] = useState(false);

  return (
    <div className="app">
      <nav>
        <h2>DevOps Dashboard</h2>
        <span>React + AWS EC2</span>
      </nav>

      <main>
        <section className="hero">
          <div>
            <p className="tag">🚀 MY FIRST DEPLOYMENT</p>
            <h1>Welcome to my DevOps Dashboard</h1>
            <p>
              A simple React project deployed on an AWS EC2 instance.
            </p>

            <button onClick={() => setDeployed(!deployed)}>
              {deployed ? "Deployment Successful ✓" : "Test Deployment"}
            </button>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">⚛️</div>
            <h3>Frontend</h3>
            <p>React.js</p>
            <span className="status">● Running</span>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>Server</h3>
            <p>AWS EC2</p>
            <span className="status">● Connected</span>
          </div>

          <div className="card">
            <div className="icon">🔄</div>
            <h3>Deployment</h3>
            <p>Manual / CI-CD</p>
            <span className="status">● Ready</span>
          </div>
        </section>

        <section className="info">
          <h2>My DevOps Journey</h2>
          <div className="steps">
            <div>1️⃣ Build React App</div>
            <div>2️⃣ Push to GitHub</div>
            <div>3️⃣ Connect EC2</div>
            <div>4️⃣ Deploy with Nginx</div>
          </div>
        </section>
      </main>

      <footer>
        Built while learning DevOps 🚀
      </footer>
    </div>
  );
}

export default App;