const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 TechHub Pvt Ltd. All Rights Reserved.</p>
          <p>
            <a href="https://www.company.com" target="_blank" rel="noreferrer">
              TechHub Pvt Ltd
            </a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: #343a40;
          color: white;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .footer p {
          margin: 5px 0;
          font-size: 1rem;
        }

        .footer a {
          color: #fff;
          text-decoration: none;
          margin: 0 10px;
          transition: color 0.2s ease; /* Simple hover transition */
        }

        .footer a:hover {
          color: #4fc3f7; /* Hover color */
        }

        @media screen and (max-width: 768px) {
          .footer {
            font-size: 0.9rem;
            height: auto;
            padding: 15px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
