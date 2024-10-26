import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="content-container">
          <h2>Welcome to Your Employee Portal</h2>
          <p>Efficiently manage and track employee data in one place.</p>
          <div className="button-group">
            <Link to="/insert" className="btn btn-primary">
              Add Employee
            </Link>
            <Link to="/display" className="btn btn-secondary">
              View Employees
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
          padding: 20px;
          box-sizing: border-box;
        }

        .content-container {
          flex: 1;
          color: #343a40;
          text-align: center; /* Center-align content */
          padding: 20px;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #343a40;
          letter-spacing: 1px;
        }

        p {
          font-size: 1.25rem;
          margin-bottom: 40px;
          {/* color: #6c757d; */}
          line-height: 1.5;
        }

        .button-group {
          display: flex;
          gap: 20px;
          justify-content: center; /* Center-align buttons horizontally */
        }

        .btn {
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 50px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.2s;
        }

        .btn-primary {
          background-color: #28a745;
          color: #fff;
        }

        .btn-primary:hover {
          background-color: #218838;
          transform: translateY(-3px);
        }

        .btn-secondary {
          background-color: #007bff;
          color: #fff;
        }

        .btn-secondary:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
        }

        @media screen and (max-width: 768px) {
          .home-container {
            flex-direction: column;
            text-align: center;
          }

          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1.1rem;
          }

          .btn {
            padding: 12px 25px;
            font-size: 0.9rem;
          }

          .button-group {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
