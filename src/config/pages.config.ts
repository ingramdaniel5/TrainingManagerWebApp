import categoriesDb from '../mocks/db/categories.db';
import productsDb from '../mocks/db/acquiredCert.db';
import usersDb from '../mocks/db/employees.db';
import rolesDb from '../mocks/db/roles.db';
import projectsDb from '../mocks/db/projects.db';

export const examplePages = {
	examplesPage: {
		id: 'examplesPage',
		to: '/examples-page',
		text: 'Examples Page',
		icon: 'HeroBookOpen',
	},
	duotoneIconsPage: {
		id: 'duotoneIconsPage',
		to: '/duotone-icons',
		text: 'Duotone Icons',
		icon: 'HeroCubeTransparent',
	},
};

export const appPages = {
	dashboardPages: {
		id: 'dashboard',
		to: '/dashboard',
		text: 'Dashboards',
		icon: 'HeroRocketLaunch',
		subPages: {
			mainOverviewDashboardPage: {
				id: 'moDashboardPage',
				to: '/dashboard/overview',
				text: 'Main Overview',
				icon: 'HeroRectangleGroup',
			},
		},
	},
	reportPages: {
		id: 'reportPages',
		to: '/report',
		text: 'Reports',
		icon: 'HeroClipboardDocumentList',
		subPages: {
			employeeSkillsReportPage: {
				id: 'employeeSkillsReportPage',
				to: '/report/employeeSkills',
				text: 'Employee Skills',
				icon: 'HeroClipboardDocumentCheck',
			},
		},
	},
	managementPages: {
		id: 'management',
		to: '/manage',
		text: 'Manage',
		icon: 'HeroClipboardDocumentCheck',
		subPages: {
			employeeDashboardPage: {
				id: 'emDashboardPage',
				to: '/manage/dashboard',
				text: 'Employee Dashboard',
				icon: 'HeroUserCircle',
			},
			employeePage: {
				id: 'employeePage',
				to: '/manage/employee',
				text: 'Employees',
				icon: 'HeroUserGroup',
				subPages: {
					listPage: {
						id: 'employeeListPage',
						to: '/manage/employee/list',
						text: 'Employees List',
						icon: 'HeroQueueList',
					},
					editPage: {
						id: 'employeePage',
						to: `/manage/employee/${usersDb[0].id}`,
						text: `Employee @${usersDb[0].id}`,
						icon: 'HeroUser',
					},
					editPageLink: {
						id: 'editPageLink',
						to: '/manage/employee',
					},
				},
			},
			rolePage: {
				id: 'rolePage',
				to: '/manage/role',
				text: 'Roles',
				icon: 'HeroShieldCheck',
				subPages: {
					listPage: {
						id: 'employeeRollListPage',
						to: '/manage/role/list',
						text: 'Role List',
						icon: 'HeroQueueList',
					},
					editPage: {
						id: 'rolePage',
						to: `/manage/role/${rolesDb[0].id}`,
						text: `Role @${rolesDb[0].id}`,
						icon: 'HeroShieldExclamation',
					},
					editPageLink: {
						id: 'editPageLink',
						to: '/employee/role',
					},
				},
			},
		},
	},
};


export const authPages = {
	loginPage: {
		id: 'loginPage',
		to: '/login',
		text: 'Login',
		icon: 'HeroArrowRightOnRectangle',
	},
	profilePage: {
		id: 'profilePage',
		to: '/profile',
		text: 'Profile',
		icon: 'HeroUser',
	},
};

const pagesConfig = {
	...examplePages,
	...authPages,
};

export default pagesConfig;
