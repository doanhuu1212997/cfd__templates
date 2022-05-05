import { Switch } from "react-router";
import PrivateRouter from "./PrivateRouter";
import { Route, Routes } from "react-router-dom";

export default function renderRouter(routers, parentPath = "") {
  return (
    <Switch>
      {routers.map((e, index) => {
        let {
          exact,
          path,
          component: Component,
          routers: childrouters,
          auth,
        } = e;
        let children = {};
        if (!path) path = "";
        path = parentPath + "/" + path;
        path = path.replace(/\/+/g, "/");
        if (childrouters) {
          children = renderRouter(childrouters, path);
        }
        if (auth) {
          return (
            <PrivateRouter
              key={index}
              exact={exact}
              path={path}
              component={(props) => (
                <Component {...props}> {children}</Component>
              )}
            />
          );
        }

        return (
          <Route
            key={index}
            exact={exact}
            path={path}
            component={(props) => <Component {...props}> {children}</Component>}
          />
        );
      })}
    </Switch>
  );
}
