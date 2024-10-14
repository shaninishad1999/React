import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <style>
                {`
                    /* Fix the navbar at the top */
                    .navbar {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        background-color: #f8f9fa;
                        padding: 15px;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                        display: flex;
                        justify-content: center;
                        z-index: 1000;
                    }

                    .navbar a {
                        text-decoration: none;
                        color: #007bff;
                        font-size: 18px;
                        margin: 0 15px;
                    }

                    .navbar a:hover {
                        color: #0056b3;
                    }

                    .active-link {
                        font-weight: bold;
                        color: #0056b3;
                    }

                    /* Layout container centered with top padding to avoid overlap with the fixed navbar */
                    .layout-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        {/* justify-content: center; */}
                        min-height: 80vh;
                        padding-top: 10px; /* Adjusted padding to make room for the fixed navbar */
                        margin: 0;
                    }

                    .red-line {
                        border: 2px solid red;
                        width: 80%;
                        margin: 20px 0;
                    }

                    p {
                        font-size: 14px;
                        color: #6c757d;
                        margin-top: 20px;
                    }
                `}
            </style>

            {/* Fixed Navbar */}
            <nav className="navbar">
                <NavLink to="/home" activeClassName="active-link">Home</NavLink>
                <NavLink to="/insert" activeClassName="active-link">Insert</NavLink>
                <NavLink to="/display" activeClassName="active-link">Display Data</NavLink>
                <NavLink to="/search" activeClassName="active-link">Search</NavLink>
                <NavLink to="/searchbyname" activeClassName="active-link">Search By Name</NavLink>
            </nav>

            {/* Main content */}
            <div className="layout-container">
                <hr className="red-line" />
                <Outlet />
                <hr className="red-line" />
                <p>www.mycompany.com</p>
            </div>
        </>
    );
}

export default Layout;
