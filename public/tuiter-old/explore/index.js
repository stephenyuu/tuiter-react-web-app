import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(
    `
    <!--back button to return to navigation page-->
    <a href="../navigation.html" class="btn btn-primary">Back</a>

    <!--<div class='row'> with 3 <div class='col'> to create 3 columns of page-->
    <div class="row mt-2">

      <!--left navigation sidebar with links to various screens throughout Tuiter-->
      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        <!--<h3>NavigationSidebar</h3>-->
        ${NavigationSidebar()}
      </div>

      <!--main section with search bar, categories, and content-->
      <div class="col-10 col-lg-7 col-xl-6">
        <!--<h3>ExploreComponent</h3>-->
        ${ExploreComponent()}
      </div>

      <!--right sidebar with links to other users you might want to follow-->
      <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <!--<h3>WhoToFollowList</h3>-->
        ${WhoToFollowList()}
      </div>
    </div>
    `
  );
}

$(exploreComponent);
