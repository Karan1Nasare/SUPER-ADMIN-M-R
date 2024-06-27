/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-cycle */

import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from './store/context-store';
import AddCourse from './components/Course/Course'; // eslint-disable-next-line import/no-named-as-default-member
import LanguagePage from './components/Language';
import Plan from './components/Plan';
import ManagePlanForm from './components/Plan/ManagePlan/ManagePlanForm';
// import AddSuperAdminNotification from './pages/superAdminNotification/addSuperAdminNotification';
import InvoiceTab from './components/Admins/Tabs/InvoiceTab';
import AdminDetailsPage from './pages/Admins/AdminDetailsPage';
import AddMaterialPage from './pages/Material/AddMaterialPage';
import AuthGuard from './Guards/AuthGuards';

const AdminsPage = lazy(() => import('./pages/Admins/AdminsPage'));
const AddAdminsPage = lazy(() => import('./pages/Admins/AddAdminsPage'));

const Banner = lazy(() => import('./components/banner'));
const AddBanner = lazy(() => import('./components/banner/addBanner'));
const Student = lazy(() => import('./components/student/index'));
const AddContent = lazy(
  () => import('./components/MaterialContent/TabContainer'),
);
const BlankAddQuestions = lazy(
  () => import('./components/questionBank/blankAddQuestions'),
);

const LogIn = lazy(() => import('./components/auth/components/Login'));
const Otp = lazy(() => import('./components/auth/components/Otp'));
const ForgotPassword = lazy(
  () => import('./components/auth/components/ForgotPassword'),
);
const ProfilePage = lazy(() => import('./pages/Profile'));
const ChangeProfile = lazy(
  () => import('./components/Profile/components/Forms/profileForm'),
);
const LayoutWrapper = lazy(() => import('./components/LayoutWrapper'));

const Dashboard = lazy(() => import('./components/dashboard'));

const QuestionBank = lazy(() => import('./components/questionBank'));
const AddQuestions = lazy(
  () => import('./components/questionBank/addQuestionTab'),
);
const Review = lazy(() => import('./components/questionBank/review/index'));

const FeaturePage = lazy(() => import('./pages/FeaturePage'));
const AddFeature = lazy(() => import('./pages/AddFeaturePage'));

const PlanPage = lazy(() => import('./pages/Plan'));
const ManagePlanPage = lazy(() => import('./pages/ManagePlan'));

const Material = lazy(() => import('./pages/Material/MaterialPage'));

const Notifications = lazy(() => import('./pages/NotificationPage'));
const AddNotification = lazy(() => import('./pages/AddNotificationPage'));

const Payment = lazy(() => import('./pages/Payment'));

const AppRoutes = [
  // Auth Route

  {
    name: 'Login',
    slug: 'log-in',
    route: '/login',
    component: LogIn,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },
  {
    name: 'Otp',
    slug: 'OTP',
    route: '/otp',
    component: Otp,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },
  {
    name: 'forgot-password',
    slug: 'FORGOT-PASSWORD',
    route: '/forgot-password',
    component: ForgotPassword,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },

  // Dashboard Route
  {
    name: 'dashboard',
    slug: 'dashboard',
    route: '/',
    component: Dashboard,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'dashboard',
  },
  {
    name: 'profile',
    slug: 'profile',
    route: '/profile',
    component: ProfilePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },
  {
    name: 'changeprofile',
    slug: 'changeprofile',
    route: '/change-profile',
    component: ChangeProfile,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },

  // This screen is for Master Admin
  {
    name: 'banner',
    slug: 'banner',
    route: '/banner',
    component: Banner,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'banner',
  },
  {
    name: 'student',
    slug: 'student',
    route: '/student',
    component: Student,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },
  {
    name: 'addBanner',
    slug: 'addBanner',
    route: `/addBanner`,
    component: AddBanner,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'banner',
  },

  // Feature Route

  {
    name: 'features',
    slug: 'features',
    route: '/features',
    component: FeaturePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'features',
  },
  {
    name: 'addFeature',
    slug: 'addFeature',
    route: '/features/addFeature',
    component: AddFeature,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'features',
  },

  // Question Bank Route
  {
    name: 'questionBank',
    slug: 'questionBank',
    route: `/questionBank`,
    component: QuestionBank,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'questionBank',
  },
  {
    name: 'addQuestions',
    slug: 'addQuestions',
    route: `/questionBank/addQuestions`,
    component: AddQuestions,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'questionBank',
  },
  {
    name: 'editquestionbanks',
    slug: 'editquestionbanks',
    route: `/questionbanks/edit/:id`,
    component: AddQuestions,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'questionBank',
  },
  {
    name: 'review',
    slug: 'review',
    route: `/questionBank/review`,
    component: Review,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'questionBank',
  },

  // Material Route
  {
    name: 'material',
    slug: 'material',
    route: `/material`,
    component: Material,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'material',
  },
  {
    name: 'material',
    slug: 'material',
    route: `/material/add/:params`,
    component: AddMaterialPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'material',
  },
  // Dashboard Route
  {
    name: 'mateiral',
    slug: 'language',
    route: '/language',
    component: LanguagePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'dashboard',
  },

  // Plan Route
  {
    name: 'plan',
    slug: 'plan',
    route: `/plan`,
    component: Plan,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'plan',
  },
  {
    name: 'addPlan',
    slug: 'addPlan',
    route: `/plan/addPlan`,
    component: ManagePlanForm,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'plan',
  },

  // Payment Route
  {
    name: 'payment',
    slug: 'payment',
    route: `/payment`,
    component: Payment,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'payment',
  },

  // Notification Route
  {
    name: 'notification',
    slug: 'notification',
    route: `/notification`,
    component: Notifications,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'notification',
  },
  {
    name: 'addNotification',
    slug: 'addNotification',
    route: '/notification/addNotification',
    component: AddNotification,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'notification',
  },
  {
    name: 'admins',
    slug: 'Admins',
    route: `/admins`,
    component: AdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admin-Add',
    slug: 'Admins-Add',
    route: `/admins/add-admin`,
    component: AddAdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admin-details',
    slug: 'Admins-details',
    route: `/admins/view/:id`,
    component: AdminDetailsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admins',
    slug: 'Admins',
    route: `/admins`,
    component: AdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admin-Add',
    slug: 'Admins-Add',
    route: `/admins/add-admin`,
    component: AddAdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'AddContent',
    slug: 'add-content',
    route: `/material/addContent`,
    component: AddContent,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  // Other Route
  {
    slug: 'notification/add',
    route: '/notification/add',
    component: AddNotification,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'notifications',
  },
  {
    name: 'Admin-Add',
    slug: 'Admins-Add',
    route: `/admins/invoice`,
    component: InvoiceTab,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
  },
];

export const getRouteByName = name => {
  return AppRoutes.find(route => route.name === name);
};

const AppRouter = () => {
  const [Store, StoreDispatch] = useStore();
  useEffect(() => {
    StoreDispatch({ type: 'Log', data: {} });
  }, []);
  return (
    <BrowserRouter>
      <div className='main-content'>
        <Routes>
          {AppRoutes.map((routeObj, routeIdx) => {
            // To check External Route
            if (!routeObj.external) {
              // Check authorized route or not
              return routeObj.auth ? (
                <Route
                  key={`route-${routeIdx}`}
                  path={`/`}
                  element={<AuthGuard />}
                >
                  {/* Check contain Wrapper for different routers  */}
                  {routeObj.wrapper ? (
                    <>
                      <Route
                        key={routeIdx}
                        path={`${routeObj.route}`}
                        element={
                          <routeObj.wrapper>
                            <routeObj.component />
                          </routeObj.wrapper>
                        }
                      ></Route>
                    </>
                  ) : (
                    <Route
                      key={routeIdx}
                      path={`${routeObj.route}`}
                      Component={routeObj.component}
                    />
                  )}
                </Route>
              ) : (
                <Route
                  key={routeIdx}
                  path={`${routeObj.route}`}
                  Component={routeObj.component}
                />
              );
            }
          })}
          <Route
            path={`/*`}
            element={
              <Navigate to={getRouteByName('dashboard').route} replace />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
