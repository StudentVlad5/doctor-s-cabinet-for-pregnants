import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

const AuthPage = lazy(() => import('pages/AuthPage'));
const ActivePage = lazy(() => import('pages/ActivePage'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));
const ArchivePage = lazy(() => import('pages/ArchivePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="checklist" component={<AuthPage />} />
          }
        />
        <Route
          path="checklist"
          element={<PrivateRoute redirectTo="/" component={<ActivePage />} />}
        />
        <Route
          path="checklist/:id"
          element={<PrivateRoute redirectTo="/" component={<DetailsPage />} />}
        />
        <Route
          path="archive"
          element={<PrivateRoute redirectTo="/" component={<ArchivePage />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
