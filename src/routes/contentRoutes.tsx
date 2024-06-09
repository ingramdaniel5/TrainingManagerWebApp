import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { appPages, authPages, examplePages } from '../config/pages.config';
import NotFoundPage from '../pages/NotFound.page';
import LoginPage from '../pages/Login.page';


/**
 * EMPLOYEE
 */

const EmployeeListPage = lazy(
	() => import('../pages/Management/Employee/EmployeeListPage/EmployeeList.page'),
);
const CustomerDashboardPage = lazy(
	() => import('../pages/Management/CustomerDashboardPage/CustomerDashboard.page'),
);
const EmployeePage = lazy(() => import('../pages/Management/Employee/EmployeePage/Employee.page'));
const RoleListPage = lazy(() => import('../pages/Management/role/RoleListPage/RoleList.page'));
const RolePage = lazy(() => import('../pages/Management/role/RolePage/Role.page'));

const ProfilePage = lazy(() => import('../pages/Profile.page'));

/**
 * Other
 */
const UnderConstructionPage = lazy(() => import('../pages/UnderConstruction.page'));

const contentRoutes: RouteProps[] = [
	{
		path: appPages.managementPages.subPages.employeePage.subPages.listPage.to,
		element: <EmployeeListPage />,
	},
	{
		path: `${appPages.managementPages.subPages.employeePage.subPages.editPageLink.to}/:id`,
		element: <EmployeePage />,
	},
	{
		path: appPages.managementPages.subPages.rolePage.subPages.listPage.to,
		element: <RoleListPage />,
	},
	{
		path: `${appPages.managementPages.subPages.rolePage.subPages.editPageLink.to}/:id`,
		element: <RolePage />,
	},
	{ path: authPages.loginPage.to, element: <LoginPage /> },
	{ path: authPages.profilePage.to, element: <ProfilePage /> },

	{ path: '*', element: <NotFoundPage /> },
];

export default contentRoutes;
