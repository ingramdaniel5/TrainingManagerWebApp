import React from 'react';
import { useNavigate } from 'react-router-dom';
import Aside, { AsideBody } from '../../../components/layouts/Aside/Aside';
import { appPages } from '../../../config/pages.config';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
	NavUser,
} from '../../../components/layouts/Navigation/Nav';
import Badge from '../../../components/ui/Badge';
import usersDb from '../../../mocks/db/employees.db';
import AsideHeadPart from './_parts/AsideHead.part';
import AsideFooterPart from './_parts/AsideFooter.part';

const DefaultAsideTemplate = () => {
	const navigate = useNavigate();

	return (
		<Aside>
			<AsideHeadPart />
			<AsideBody>
				<Nav>
					<NavItem {...appPages.dashboardPages.subPages.mainOverviewDashboardPage} />
					<NavItem {...appPages.reportPages.subPages.employeeSkillsReportPage} />

					<NavSeparator />
					<NavCollapse
						text={appPages.dashboardPages.text}
						to={appPages.dashboardPages.to}
						icon={appPages.dashboardPages.icon}>
						<NavItem {...appPages.dashboardPages.subPages.mainOverviewDashboardPage} />
					</NavCollapse>
					<NavCollapse
						text={appPages.reportPages.text}
						to={appPages.reportPages.to}
						icon={appPages.reportPages.icon}>
						<NavItem {...appPages.reportPages.subPages.employeeSkillsReportPage} />
					</NavCollapse>
					<NavCollapse
						text={appPages.managementPages.text}
						to={appPages.managementPages.to}
						icon={appPages.managementPages.icon}>
						{/* <NavItem {...appPages.crmAppPages.subPages.crmDashboardPage} /> */}
						<NavCollapse
							text={appPages.managementPages.subPages.employeePage.text}
							to={appPages.managementPages.subPages.employeePage.to}
							icon={appPages.managementPages.subPages.employeePage.icon}>
							<NavItem
								{...appPages.managementPages.subPages.employeePage.subPages.listPage}
							/>
							<NavItem
								{...appPages.managementPages.subPages.employeePage.subPages.editPage}
							/>
						</NavCollapse>
						<NavCollapse
							text={appPages.managementPages.subPages.rolePage.text}
							to={appPages.managementPages.subPages.rolePage.to}
							icon={appPages.managementPages.subPages.rolePage.icon}>
							<NavItem
								{...appPages.managementPages.subPages.rolePage.subPages.listPage}
							/>
							<NavItem
								{...appPages.managementPages.subPages.rolePage.subPages.editPage}
							/>
						</NavCollapse>
					</NavCollapse>
					<NavSeparator />
				</Nav>
			</AsideBody>
			<AsideFooterPart />
		</Aside>
	);
};

export default DefaultAsideTemplate;
