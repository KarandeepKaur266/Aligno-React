import { Link } from "react-router-dom";

export default function Header(){
    return(
<>
<div className="header">
  <nav className="navbar py-4">
    <div className="container-xxl">
      {/* header rightbar icon */}
      <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
        <div className="d-flex">
         <Link className="nav-link text-primary collapsed" to="/help" title="Get Help">
                  <i className="icofont-info-square fs-5" />
         </Link>

        {/* Avatar list */}
                <div className="avatar-list avatar-list-stacked px-3">
                  {["avatar2", "avatar1", "avatar3", "avatar4", "avatar7", "avatar8"].map((img, i) => (
                    <img
                      key={i}
                      className="avatar rounded-circle"
                      src={`/assets/images/xs/${img}.jpg`}
                      alt={`Avatar ${i + 1}`}
                    />
                  ))}
                  <span
                    className="avatar rounded-circle text-center pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    <i className="icofont-ui-add" />
                  </span>
                </div>
              </div>

              {/* Notifications dropdown */}
              <div className="dropdown notifications">
                <a
                  className="nav-link dropdown-toggle pulse"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icofont-alarm fs-5" />
                  <span className="pulse-ring" />
                </a>

                {/* Example notification dropdown structure */}
                <div
                  id="NotificationsDiv"
                  className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
                >
                  <div className="card border-0 w380">
                    <div className="card-header border-0 p-3 d-flex justify-content-between">
                      <h5 className="mb-0 font-weight-light">Notifications</h5>
                      <span className="badge text-white bg-primary">11</span>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled list mb-0">
                        {/* Example Notification */}
                        <li className="py-2 border-bottom">
                          <div className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="/assets/images/xs/avatar1.jpg"
                              alt="Notification"
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="fw-bold">Dylan Hunter</span>
                                <small>2 min ago</small>
                              </p>
                              <span>
                                Added <strong>my-task UI/UX Design</strong>{" "}
                                <span className="badge bg-success">Review</span>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Link className="card-footer text-center border-top-0" to="/notifications">
                      View all notifications
                    </Link>
                  </div>
                </div>
              </div>

              {/* User Profile Dropdown */}
              <div className="dropdown user-profile ms-3 d-flex align-items-center">
                <div className="u-info me-2 text-end">
                  <p className="mb-0 line-height-sm fw-bold">Dylan Hunter</p>
                  <small>Admin Profile</small>
                </div>

                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <img
                    className="avatar lg rounded-circle img-thumbnail"
                    src="/assets/images/profile_av.png"
                    alt="Profile"
                  />
                </a>

                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                  <div className="card border-0 w280">
                    <div className="card-body pb-0">
                      <div className="d-flex py-1">
                        <img
                          className="avatar rounded-circle"
                          src="/assets/images/profile_av.png"
                          alt="profile"
                        />
                        <div className="flex-fill ms-3">
                          <p className="mb-0 fw-bold">Dylan Hunter</p>
                          <small>Dylan.hunter@gmail.com</small>
                        </div>
                      </div>
                      <hr className="dropdown-divider border-dark" />
                    </div>

                    <div className="list-group m-2">
                      <Link to="/tasks" className="list-group-item list-group-item-action border-0">
                        <i className="icofont-tasks fs-5 me-3" />
                        My Task
                      </Link>
                      <Link to="/members" className="list-group-item list-group-item-action border-0">
                        <i className="icofont-ui-user-group fs-6 me-3" />
                        Members
                      </Link>
                      <Link to="/logout" className="list-group-item list-group-item-action border-0">
                        <i className="icofont-logout fs-6 me-3" />
                        Signout
                      </Link>
                      <hr className="dropdown-divider border-dark" />
                      <Link to="/signup" className="list-group-item list-group-item-action border-0">
                        <i className="icofont-contact-add fs-5 me-3" />
                        Add personal account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings Icon */}
              <div className="px-md-1">
                <a
                  href="#offcanvas_setting"
                  data-bs-toggle="offcanvas"
                  aria-expanded="false"
                  title="template setting"
                >
                  <svg
                    className="svg-stroke"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0..." />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu toggler */}
            <button
              className="navbar-toggler p-0 border-0 menu-toggle order-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainHeader" >
              <span className="fa fa-bars" />
            </button>

            {/* Search bar */}
            <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0">
              <div className="input-group flex-nowrap input-group-lg">
                <button type="button" className="input-group-text">
                  <i className="fa fa-search" />
                </button>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="search"
                />
                <button
                  type="button"
                  className="input-group-text add-member-top"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}