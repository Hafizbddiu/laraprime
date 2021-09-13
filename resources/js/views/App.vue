<template>
  <div>
    <div class="wrapper">
      <!--sidebar wrapper -->
      <div class="sidebar-wrapper" data-simplebar="true">
        <div class="sidebar-header">
          <div>
            <!-- <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon"> -->
            <i class="pi pi-slack"></i>
          </div>
          <div>
            <h4 class="logo-text">ERP</h4>
          </div>
          <div class="toggle-icon ml-auto">
            <i class="pi pi-align-left"></i>
          </div>
        </div>
        <!--navigation-->
        <ul class="metismenu" id="menu">
          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-home"></i></div>
              <div class="menu-title">HRM</div>
            </a>
            <ul>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/">Home</router-link></a
                >
              </li>
              <li>
                <!-- <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-designation">
                    Create Designations</router-link
                  ></a
                > -->
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/designation-list"
                    >Designation list</router-link
                  ></a
                >
              </li>
              <li>
                <!-- <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-department"
                    >Create Department</router-link
                  ></a
                > -->
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/department-list"
                    >Department List</router-link
                  ></a
                >
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-arrow-right"></i></div>
              <div class="menu-title">Base</div>
            </a>
            <ul>
              <li>
                <!-- <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/">Home</router-link></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-brand">
                    Create Brand</router-link
                  ></a
                > -->
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/brand-list">Brand list</router-link></a
                >
              </li>
              <li>
                <!-- <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-manufacture"
                    >Create Manufacture</router-link
                  ></a
                > -->
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/manufacture-list"
                    >Manufacture List</router-link
                  ></a
                >
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-home"></i></div>
              <div class="menu-title">Purchase</div>
            </a>
            <ul>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-purchase-return">
                    Create Purchase Return</router-link
                  ></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/purchase-return-list"
                    >Purchase Return List</router-link
                  ></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/purchase-return-invoice"
                    >Purchase Return Invoice</router-link
                  ></a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-home"></i></div>
              <div class="menu-title">Status</div>
            </a>
            <ul>
               <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/sales-status">Sales Status</router-link></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/sales-return-status"
                    >Sales Return Status</router-link
                  ></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/purchase-status">
                    Purchase Status</router-link
                  ></a
                >
              </li>
             
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/purchase-return-status"
                    >Purchase Return Status</router-link
                  ></a
                >
              </li>
              
			  
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-home"></i></div>
              <div class="menu-title">Lokers</div>
            </a>
            <ul>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/create-locker">
                    Create Locker</router-link
                  ></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/locker-list">Loker List</router-link></a
                >
              </li>
              <li>
                <a
                  ><i class="pi pi-arrow-right"></i
                  ><router-link to="/update-locker"
                    >Update Locker</router-link
                  ></a
                >
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-folder"></i></div>
              <div class="menu-title">Application</div>
            </a>
            <ul>
              <li>
                <a href="app-emailbox.html"
                  ><i class="pi pi-arrow-right"></i>Email</a
                >
              </li>
              <li>
                <a href="app-chat-box.html"
                  ><i class="pi pi-arrow-right"></i>Chat Box</a
                >
              </li>
              <li>
                <a href="app-file-manager.html"
                  ><i class="pi pi-arrow-right"></i>File Manager</a
                >
              </li>
              <li>
                <a href="app-contact-list.html"
                  ><i class="pi pi-arrow-right"></i>Contatcs</a
                >
              </li>
              <li>
                <a href="app-to-do.html"
                  ><i class="pi pi-arrow-right"></i>Todo List</a
                >
              </li>
              <li>
                <a href="app-invoice.html"
                  ><i class="pi pi-arrow-right"></i>Invoice</a
                >
              </li>
              <li>
                <a href="app-fullcalender.html"
                  ><i class="pi pi-arrow-right"></i>Calendar</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-label">UI Elements</li>
          <li>
            <a href="widgets.html">
              <div class="parent-icon"><i class="pi pi-cookie"></i></div>
              <div class="menu-title">Widgets</div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="pi pi-cart"></i></div>
              <div class="menu-title">eCommerce</div>
            </a>
            <ul>
              <li>
                <a href="ecommerce-products.html"
                  ><i class="pi pi-arrow-right"></i>Products</a
                >
              </li>
              <li>
                <a href="ecommerce-products-details.html"
                  ><i class="pi pi-arrow-right"></i>Product Details</a
                >
              </li>
              <li>
                <a href="ecommerce-add-new-products.html"
                  ><i class="pi pi-arrow-right"></i>Add New Products</a
                >
              </li>
              <li>
                <a href="ecommerce-orders.html"
                  ><i class="pi pi-arrow-right"></i>Orders</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon">
                <i class="pi pi-bookmark-heart"></i>
              </div>
              <div class="menu-title">Components</div>
            </a>
            <ul>
              <li>
                <a href="component-alerts.html"
                  ><i class="pi pi-arrow-right"></i>Alerts</a
                >
              </li>
              <li>
                <a href="component-accordions.html"
                  ><i class="pi pi-arrow-right"></i>Accordions</a
                >
              </li>
              <li>
                <a href="component-badges.html"
                  ><i class="pi pi-arrow-right"></i>Badges</a
                >
              </li>
              <li>
                <a href="component-buttons.html"
                  ><i class="pi pi-arrow-right"></i>Buttons</a
                >
              </li>
              <li>
                <a href="component-cards.html"
                  ><i class="pi pi-arrow-right"></i>Cards</a
                >
              </li>
              <li>
                <a href="component-carousels.html"
                  ><i class="pi pi-arrow-right"></i>Carousels</a
                >
              </li>
              <li>
                <a href="component-list-groups.html"
                  ><i class="pi pi-arrow-right"></i>List Groups</a
                >
              </li>
              <li>
                <a href="component-media-object.html"
                  ><i class="pi pi-arrow-right"></i>Media Objects</a
                >
              </li>
              <li>
                <a href="component-modals.html"
                  ><i class="pi pi-arrow-right"></i>Modals</a
                >
              </li>
              <li>
                <a href="component-navs-tabs.html"
                  ><i class="pi pi-arrow-right"></i>Navs & Tabs</a
                >
              </li>
              <li>
                <a href="component-navbar.html"
                  ><i class="pi pi-arrow-right"></i>Navbar</a
                >
              </li>
              <li>
                <a href="component-paginations.html"
                  ><i class="pi pi-arrow-right"></i>Pagination</a
                >
              </li>
              <li>
                <a href="component-popovers-tooltips.html"
                  ><i class="pi pi-arrow-right"></i>Popovers & Tooltips</a
                >
              </li>
              <li>
                <a href="component-progress-bars.html"
                  ><i class="pi pi-arrow-right"></i>Progress</a
                >
              </li>
              <li>
                <a href="component-spinners.html"
                  ><i class="pi pi-arrow-right"></i>Spinners</a
                >
              </li>
              <li>
                <a href="component-notifications.html"
                  ><i class="pi pi-arrow-right"></i>Notifications</a
                >
              </li>
              <li>
                <a href="component-avtars-chips.html"
                  ><i class="pi pi-arrow-right"></i>Avatrs & Chips</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-repeat"></i></div>
              <div class="menu-title">Content</div>
            </a>
            <ul>
              <li>
                <a href="content-grid-system.html"
                  ><i class="pi pi-arrow-right"></i>Grid System</a
                >
              </li>
              <li>
                <a href="content-typography.html"
                  ><i class="pi pi-arrow-right"></i>Typography</a
                >
              </li>
              <li>
                <a href="content-text-utilities.html"
                  ><i class="pi pi-arrow-right"></i>Text Utilities</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-donate-blood"></i></div>
              <div class="menu-title">Icons</div>
            </a>
            <ul>
              <li>
                <a href="icons-line-icons.html"
                  ><i class="pi pi-arrow-right"></i>Line Icons</a
                >
              </li>
              <li>
                <a href="icons-boxicons.html"
                  ><i class="pi pi-arrow-right"></i>Boxicons</a
                >
              </li>
              <li>
                <a href="icons-feather-icons.html"
                  ><i class="pi pi-arrow-right"></i>Feather Icons</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-label">Forms & Tables</li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon">
                <i class="pi pi-message-square-edit"></i>
              </div>
              <div class="menu-title">Forms</div>
            </a>
            <ul>
              <li>
                <a href="form-elements.html"
                  ><i class="pi pi-arrow-right"></i>Form Elements</a
                >
              </li>
              <li>
                <a href="form-input-group.html"
                  ><i class="pi pi-arrow-right"></i>Input Groups</a
                >
              </li>
              <li>
                <a href="form-layouts.html"
                  ><i class="pi pi-arrow-right"></i>Forms Layouts</a
                >
              </li>
              <li>
                <a href="form-validations.html"
                  ><i class="pi pi-arrow-right"></i>Form Validation</a
                >
              </li>
              <li>
                <a href="form-wizard.html"
                  ><i class="pi pi-arrow-right"></i>Form Wizard</a
                >
              </li>
              <li>
                <a href="form-text-editor.html"
                  ><i class="pi pi-arrow-right"></i>Text Editor</a
                >
              </li>
              <li>
                <a href="form-file-upload.html"
                  ><i class="pi pi-arrow-right"></i>File Upload</a
                >
              </li>
              <li>
                <a href="form-date-time-pickes.html"
                  ><i class="pi pi-arrow-right"></i>Date Pickers</a
                >
              </li>
              <li>
                <a href="form-select2.html"
                  ><i class="pi pi-arrow-right"></i>Select2</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-grid-alt"></i></div>
              <div class="menu-title">Tables</div>
            </a>
            <ul>
              <li>
                <a href="table-basic-table.html"
                  ><i class="pi pi-arrow-right"></i>Basic Table</a
                >
              </li>
              <li>
                <a href="table-datatable.html"
                  ><i class="pi pi-arrow-right"></i>Data Table</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-label">Pages</li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-lock"></i></div>
              <div class="menu-title">Authentication</div>
            </a>
            <ul>
              <li>
                <a href="authentication-signin.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Sign In</a
                >
              </li>
              <li>
                <a href="authentication-signup.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Sign Up</a
                >
              </li>
              <li>
                <a
                  href="authentication-signin-with-header-footer.html"
                  target="_blank"
                  ><i class="pi pi-arrow-right"></i>Sign In with Header &
                  Footer</a
                >
              </li>
              <li>
                <a
                  href="authentication-signup-with-header-footer.html"
                  target="_blank"
                  ><i class="pi pi-arrow-right"></i>Sign Up with Header &
                  Footer</a
                >
              </li>
              <li>
                <a href="authentication-forgot-password.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Forgot Password</a
                >
              </li>
              <li>
                <a href="authentication-reset-password.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Reset Password</a
                >
              </li>
              <li>
                <a href="authentication-lock-screen.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Lock Screen</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="user-profile.html">
              <div class="parent-icon"><i class="pi pi-user-circle"></i></div>
              <div class="menu-title">User Profile</div>
            </a>
          </li>
          <li>
            <a href="timeline.html">
              <div class="parent-icon">
                <i class="pi pi-video-recording"></i>
              </div>
              <div class="menu-title">Timeline</div>
            </a>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-error"></i></div>
              <div class="menu-title">Errors</div>
            </a>
            <ul>
              <li>
                <a href="errors-404-error.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>404 Error</a
                >
              </li>
              <li>
                <a href="errors-500-error.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>500 Error</a
                >
              </li>
              <li>
                <a href="errors-coming-soon.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Coming Soon</a
                >
              </li>
              <li>
                <a href="error-blank-page.html" target="_blank"
                  ><i class="pi pi-arrow-right"></i>Blank Page</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="faq.html">
              <div class="parent-icon"><i class="pi pi-help-circle"></i></div>
              <div class="menu-title">FAQ</div>
            </a>
          </li>
          <li>
            <a href="pricing-table.html">
              <div class="parent-icon"><i class="pi pi-diamond"></i></div>
              <div class="menu-title">Pricing</div>
            </a>
          </li>
          <li class="menu-label">Charts & Maps</li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-line-chart"></i></div>
              <div class="menu-title">Charts</div>
            </a>
            <ul>
              <li>
                <a href="charts-apex-chart.html"
                  ><i class="pi pi-arrow-right"></i>Apex</a
                >
              </li>
              <li>
                <a href="charts-chartjs.html"
                  ><i class="pi pi-arrow-right"></i>Chartjs</a
                >
              </li>
              <li>
                <a href="charts-highcharts.html"
                  ><i class="pi pi-arrow-right"></i>Highcharts</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-map-alt"></i></div>
              <div class="menu-title">Maps</div>
            </a>
            <ul>
              <li>
                <a href="map-google-maps.html"
                  ><i class="pi pi-arrow-right"></i>Google Maps</a
                >
              </li>
              <li>
                <a href="map-vector-maps.html"
                  ><i class="pi pi-arrow-right"></i>Vector Maps</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-label">Others</li>
          <li>
            <a class="has-arrow" href="javascript:;">
              <div class="parent-icon"><i class="pi pi-menu"></i></div>
              <div class="menu-title">Menu Levels</div>
            </a>
            <ul>
              <li>
                <a class="has-arrow" href="javascript:;"
                  ><i class="pi pi-arrow-right"></i>Level One</a
                >
                <ul>
                  <li>
                    <a class="has-arrow" href="javascript:;"
                      ><i class="pi pi-arrow-right"></i>Level Two</a
                    >
                    <ul>
                      <li>
                        <a href="javascript:;"
                          ><i class="pi pi-arrow-right"></i>Level Three</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://codervent.com/rukada/documentation/index.html"
              target="_blank"
            >
              <div class="parent-icon"><i class="pi pi-folder"></i></div>
              <div class="menu-title">Documentation</div>
            </a>
          </li>
          <li>
            <a href="https://themeforest.net/user/codervent" target="_blank">
              <div class="parent-icon"><i class="pi pi-support"></i></div>
              <div class="menu-title">Support</div>
            </a>
          </li>
        </ul>
        <!--end navigation-->
      </div>
      <!--end sidebar wrapper -->
      <!--start header -->
      <header>
        <div class="topbar d-flex align-items-center">
          <nav class="navbar navbar-expand">
            <div class="mobile-toggle-menu">
              <i class="pi pi-align-justify"></i>
            </div>
            <div class="search-bar flex-grow-1">
              <div class="position-relative search-bar-box">
                <input
                  type="text"
                  class="form-control search-control"
                  placeholder="Type to search..."
                />
                <span
                  class="position-absolute search-show translate-middle-y"
                  style="top: 17%"
                  ><i class="pi pi-search"></i
                ></span>
                <span
                  class="position-absolute search-close translate-middle-y"
                  style="top: 0%"
                  ><i class="pi pi-times"></i
                ></span>
              </div>
            </div>
            <div class="top-menu ms-auto">
              <ul class="navbar-nav align-items-center">
                <li class="nav-item mobile-search-icon">
                  <a class="nav-link" href="#">
                    <i class="pi pi-search"></i>
                  </a>
                </li>
                <li class="nav-item dropdown dropdown-large">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="pi pi-folder"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    style="left: -315px !important; right: 100% !important"
                  >
                    <div class="row row-cols-3 g-3 p-3">
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-cosmic text-white"
                        >
                          <i class="pi pi-group"></i>
                        </div>
                        <div class="app-title">Teams</div>
                      </div>
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-burning text-white"
                        >
                          <i class="pi pi-atom"></i>
                        </div>
                        <div class="app-title">Projects</div>
                      </div>
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-lush text-white"
                        >
                          <i class="pi pi-shield"></i>
                        </div>
                        <div class="app-title">Tasks</div>
                      </div>
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-kyoto text-dark"
                        >
                          <i class="pi pi-notification"></i>
                        </div>
                        <div class="app-title">Feeds</div>
                      </div>
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-blues text-dark"
                        >
                          <i class="pi pi-file"></i>
                        </div>
                        <div class="app-title">Files</div>
                      </div>
                      <div class="col text-center">
                        <div
                          class="app-box mx-auto bg-gradient-moonlit text-white"
                        >
                          <i class="pi pi-filter-alt"></i>
                        </div>
                        <div class="app-title">Alerts</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown dropdown-large">
                  <a
                    class="
                      nav-link
                      dropdown-toggle dropdown-toggle-nocaret
                      position-relative
                    "
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="alert-count">7</span>
                    <i class="pi pi-bell"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    style="left: -315px !important; right: 100% !important"
                  >
                    <a href="javascript:;">
                      <div class="msg-header">
                        <p class="msg-header-title">Notifications</p>
                        <p class="msg-header-clear ms-auto">
                          Marks all as read
                        </p>
                      </div>
                    </a>
                    <div class="header-notifications-list">
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-primary text-primary">
                            <i class="pi pi-group"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              New Customers<span class="msg-time float-end"
                                >14 Sec ago</span
                              >
                            </h6>
                            <p class="msg-info">5 new user registered</p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-danger text-danger">
                            <i class="pi pi-cart-alt"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              New Orders
                              <span class="msg-time float-end">2 min ago</span>
                            </h6>
                            <p class="msg-info">You have recived new orders</p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-success text-success">
                            <i class="pi pi-file"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              24 PDF File<span class="msg-time float-end"
                                >19 min ago</span
                              >
                            </h6>
                            <p class="msg-info">The pdf files generated</p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-warning text-warning">
                            <i class="pi pi-send"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Time Response
                              <span class="msg-time float-end">28 min ago</span>
                            </h6>
                            <p class="msg-info">
                              5.1 min avarage time response
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-info text-info">
                            <i class="pi pi-home-circle"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              New Product Approved
                              <span class="msg-time float-end">2 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              Your new product has approved
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-danger text-danger">
                            <i class="pi pi-message-detail"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              New Comments
                              <span class="msg-time float-end">4 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              New customer comments recived
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-success text-success">
                            <i class="pi pi-check-square"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Your item is shipped
                              <span class="msg-time float-end">5 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              Successfully shipped your item
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-primary text-primary">
                            <i class="pi pi-user-pin"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              New 24 authors<span class="msg-time float-end"
                                >1 day ago</span
                              >
                            </h6>
                            <p class="msg-info">
                              24 new authors joined last week
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="notify bg-light-warning text-warning">
                            <i class="pi pi-door-open"></i>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Defense Alerts
                              <span class="msg-time float-end"
                                >2 weeks ago</span
                              >
                            </h6>
                            <p class="msg-info">45% less alerts last 4 weeks</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a href="javascript:;">
                      <div class="text-center msg-footer">
                        View All Notifications
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown dropdown-large">
                  <a
                    class="
                      nav-link
                      dropdown-toggle dropdown-toggle-nocaret
                      position-relative
                    "
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="alert-count">8</span>
                    <i class="pi pi-comment"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    style="left: -315px !important; right: 100% !important"
                  >
                    <a href="javascript:;">
                      <div class="msg-header">
                        <p class="msg-header-title">Messages</p>
                        <p class="msg-header-clear ms-auto">
                          Marks all as read
                        </p>
                      </div>
                    </a>
                    <div class="header-message-list">
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-1.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Daisy Anderson
                              <span class="msg-time float-end">5 sec ago</span>
                            </h6>
                            <p class="msg-info">The standard chunk of lorem</p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-2.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Althea Cabardo
                              <span class="msg-time float-end">14 sec ago</span>
                            </h6>
                            <p class="msg-info">
                              Many desktop publishing packages
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-3.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Oscar Garner
                              <span class="msg-time float-end">8 min ago</span>
                            </h6>
                            <p class="msg-info">
                              Various versions have evolved over
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-4.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Katherine Pechon
                              <span class="msg-time float-end">15 min ago</span>
                            </h6>
                            <p class="msg-info">
                              Making this the first true generator
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-5.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Amelia Doe
                              <span class="msg-time float-end">22 min ago</span>
                            </h6>
                            <p class="msg-info">
                              Duis aute irure dolor in reprehenderit
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-6.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Cristina Jhons
                              <span class="msg-time float-end">2 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              The passage is attributed to an unknown
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-7.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              James Caviness
                              <span class="msg-time float-end">4 hrs ago</span>
                            </h6>
                            <p class="msg-info">The point of using Lorem</p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-8.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Peter Costanzo
                              <span class="msg-time float-end">6 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              It was popularised in the 1960s
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-9.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              David Buckley
                              <span class="msg-time float-end">2 hrs ago</span>
                            </h6>
                            <p class="msg-info">
                              Various versions have evolved over
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-10.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Thomas Wheeler
                              <span class="msg-time float-end">2 days ago</span>
                            </h6>
                            <p class="msg-info">
                              If you are going to use a passage
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <!-- <img src="assets/images/avatars/avatar-11.png" class="msg-avatar" alt="user avatar"> -->
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Johnny Seitz
                              <span class="msg-time float-end">5 days ago</span>
                            </h6>
                            <p class="msg-info">
                              All the Lorem Ipsum generators
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a href="javascript:;">
                      <div class="text-center msg-footer">
                        View All Messages
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="user-box dropdown">
              <a
                class="
                  d-flex
                  align-items-center
                  nav-link
                  dropdown-toggle dropdown-toggle-nocaret
                "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <!-- <img src="assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar"> -->
                <div class="user-info ps-3">
                  <p class="user-name mb-0">Pauline Seitz</p>
                  <p class="designattion mb-0">Web Designer</p>
                </div>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                style="left: -50px !important; right: 0% !important"
              >
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-user"></i><span>Profile</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-cog"></i><span>Settings</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-home-circle"></i><span>Dashboard</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-dollar-circle"></i><span>Earnings</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-download"></i><span>Downloads</span></a
                  >
                </li>
                <li>
                  <div class="dropdown-divider mb-0"></div>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="pi pi-log-out-circle"></i><span>Logout</span></a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <!--end header -->
      <!--start page wrapper -->
      <div class="page-wrapper">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
      <!--end page wrapper -->
      <!--start overlay-->
      <div class="overlay toggle-icon"></div>
      <!--end overlay-->
      <!--Start Back To Top Button-->
      <a href="javaScript:;" class="back-to-top"
        ><i class="pi pi-arrow-up"></i
      ></a>
      <!--End Back To Top Button-->
      <footer class="page-footer">
        <p class="mb-0">Copyright © 2021. All right reserved.</p>
      </footer>
    </div>
    <!--end wrapper-->
    <!--start switcher-->
    <div class="switcher-wrapper">
      <div class="switcher-btn"><i class="pi pi-cog bx-spin"></i></div>
      <div class="switcher-body">
        <div class="d-flex align-items-center">
          <h5 class="mb-0 text-uppercase">Theme Customizer</h5>
          <button
            type="button"
            class="btn-close ms-auto close-switcher"
            aria-label="Close"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>
        <hr />
        <h6 class="mb-0">Theme Styles</h6>
        <hr />
        <div class="d-flex align-items-center justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="lightmode"
              checked
            />
            <label class="form-check-label" for="lightmode">Light</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="darkmode"
            />
            <label class="form-check-label" for="darkmode">Dark</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="semidark"
            />
            <label class="form-check-label" for="semidark">Semi Dark</label>
          </div>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="minimaltheme"
            name="flexRadioDefault"
          />
          <label class="form-check-label" for="minimaltheme"
            >Minimal Theme</label
          >
        </div>
        <hr />
        <h6 class="mb-0">Header Colors</h6>
        <hr />
        <div class="header-colors-indigators">
          <div class="row row-cols-auto g-3">
            <div class="col">
              <div class="indigator headercolor1" id="headercolor1"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor2" id="headercolor2"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor3" id="headercolor3"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor4" id="headercolor4"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor5" id="headercolor5"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor6" id="headercolor6"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor7" id="headercolor7"></div>
            </div>
            <div class="col">
              <div class="indigator headercolor8" id="headercolor8"></div>
            </div>
          </div>
        </div>
        <hr />
        <h6 class="mb-0">Sidebar Colors</h6>
        <hr />
        <div class="header-colors-indigators">
          <div class="row row-cols-auto g-3">
            <div class="col">
              <div class="indigator sidebarcolor1" id="sidebarcolor1"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor2" id="sidebarcolor2"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor3" id="sidebarcolor3"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor4" id="sidebarcolor4"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor5" id="sidebarcolor5"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor6" id="sidebarcolor6"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor7" id="sidebarcolor7"></div>
            </div>
            <div class="col">
              <div class="indigator sidebarcolor8" id="sidebarcolor8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import ScrollPanel from "primevue/scrollpanel";

export default {
  name: "App",
  components: {
    Menubar,
    ScrollPanel,
  },
  //   mounted() {
  //     // if (this.theme == true) {
  //     //   import("primevue/resources/themes/bootstrap4-dark-blue/theme.css");
  //     // } else {
  //     //   import("primevue/resources/themes/nova-vue/theme.css");
  //     // }
  //     // console.log(this.$route.fullPath)
  //     // console.log(this.$listeners = 'rtest');

  //   },
  data() {
    return {};
  },
  //   methods: {
  //     fully() {
  //       this.toggle = !this.toggle;
  //       if (this.toggle == true) {
  //         this.classItem = "p-col-9 p-mt-2";
  //       } else {
  //         this.classItem = "p-col-12 p-mt-2";
  //       }
  //     },
  //     changeTheme() {
  //       this.theme = !this.theme;
  //       if (this.theme == true) {
  //         document.body.style.backgroundColor = "##f8fafc";
  //         document.body.style.color = "#00000";
  //         import("primevue/resources/themes/nova-vue/theme.css");
  //       } else {
  //         document.body.style.backgroundColor = "rgb(31 39 51)";
  //         document.body.style.color = "rgb(255 255 255 / 87%)";
  //         import("primevue/resources/themes/bootstrap4-dark-blue/theme.css");
  //       }
  //     }
  //   }
};
</script>


