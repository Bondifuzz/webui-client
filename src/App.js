import "antd/dist/antd.css";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { routes } from "./config/routes";
import { AuthProvider } from "./context";
import { AppProvider, FuzzProvider } from "./context/context";
import AppError from "./pages/AppError/AppError";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FuzzProvider>
          <AppProvider>
            <Router>
              <ErrorBoundary FallbackComponent={AppError}>
                <Switch>
                  {routes.map((route) => (
                    <AppRoutes
                      key={route.path}
                      path={route.path}
                      component={route.component}
                      exact={route.exact}
                      isPrivate={route.isPrivate}
                    />
                  ))}
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </ErrorBoundary>
            </Router>
          </AppProvider>
        </FuzzProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
