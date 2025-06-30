import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomeComponent } from './components/homeComponent';
import { ReactDocsComponent } from './components/reactDocsComponent';
import PageNotFoundComponent from './components/pageNotFoundComponent';
import { routePathPrefix } from './assets/constantFiles/appConstants';

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {/* default component */}
        <Route exact="true" path="/" element={<HomeComponent />} />
        {/* <Route exact  path='/ReactJsPortal' component={HomeComponent} />   */}

        {/* ReactDocsDocs component */}
        <Route path={routePathPrefix + 'ReactDocs/*'} element={<ReactDocsComponent />} />

        <Route exact="true" path='/ReactJsPortal' element={<Navigate to={routePathPrefix + 'ReactDocs/GettingStarted'} />} />
        {/* <Route   path={routePathPrefix + 'ReactDocs/GettingStarted'} element={<GettingStartedComponent />} />  */}

        {/* Page Not Found component */}
        <Route path='*' element={<PageNotFoundComponent />} />
      </Routes>
    </Router>

  );
}
