import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({ reducer: { who: whoReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        {/* <div class='row'> with 3 <div class='col'> to create 3 columns of page */}
        <div class="row mt-2">
          {/* left navigation sidebar with links to various screens throughout Tuiter */}
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            {/* <h3>NavigationSidebar</h3> */}
            <NavigationSidebar />
          </div>

          {/* main section with search bar, categories, and content */}
          <div class="col-10 col-lg-7 col-xl-6">
            {/* <h3>ExploreComponent</h3> */}
            <ExploreComponent />
          </div>

          {/* right sidebar with links to other users you might want to follow */}
          <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            {/* <h3>WhoToFollowList</h3> */}
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
