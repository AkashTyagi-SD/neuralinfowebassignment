import React from "react";
import { Switch, Route } from "react-router-dom";
import AllPostList from "../screens/AllPostList";
import PostDetails from "../screens/PostDetails";
function index() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AllPostList} />
        <Route path="/postdetails" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default index;
