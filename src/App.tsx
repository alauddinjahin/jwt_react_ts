import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/route';
import { PrivateRoute, ProtectedRoute } from './routes/AuthenticableRoutes';
import { RouteType } from './types/RouteType.type';
import './axios';

function App() {

  return (
    <div className="App">
      <Routes>
        {
          routes.map((route, index) => {

            const { path, element, isPrivate, isProtected }:RouteType = route;

            return isPrivate ?
              (
                <Route key={index} element={<PrivateRoute />}>
                  <Route key={index} path={path} element={element} />
                </Route>
              ) :
              (
                isProtected ? (
                  <Route key={index} element={<ProtectedRoute />}>
                    <Route key={index} path={path} element={element} />
                  </Route>
                ) : (
                  <Route key={index} path={path} element={element} />
                )
              );

          })
        }

      </Routes>

    </div>
  );
}

export default App;
