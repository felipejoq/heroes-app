import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth";
import {HeroesRoutes} from "../heroes";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            {/*<Routes>*/}
            {/*  <Route path="/*" element={<LoginPage/>}/>*/}
            {/*</Routes>*/}
            <LoginPage />
          </PublicRoute>
        }/>
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>

        {/*<Route path="login" element={<LoginPage/>}/>*/}
        {/*<Route path="/*" element={<HeroesRoutes/>}/>*/}
      </Routes>
    </>
  );
};