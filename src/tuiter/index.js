import { Provider } from "react-redux";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import store from "./reducers/store";

function TuiterLayoutTemplate({ children, active }) {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        {/* <div class='row'> with 3 <div class='col'> to create 3 columns of page */}
        <div className="row mt-2">
          {/* left navigation sidebar with links to various screens throughout Tuiter */}
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            {/* <h3>NavigationSidebar</h3> */}
            <NavigationSidebar active={active} />
          </div>

          {/* main section with search bar, categories, and content */}
          <div className="col-10 col-lg-7 col-xl-6">
            {/* <h3>ExploreComponent</h3> */}
            {children}
          </div>

          {/* right sidebar with links to other users you might want to follow */}
          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            {/* <h3>WhoToFollowList</h3> */}
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default TuiterLayoutTemplate;
