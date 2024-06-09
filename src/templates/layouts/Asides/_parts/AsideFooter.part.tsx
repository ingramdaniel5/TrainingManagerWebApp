import React from 'react';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
} from '../../../../components/layouts/Navigation/Nav';
import Badge from '../../../../components/ui/Badge';
import UserTemplate from '../../User/User.template';
import DarkModeSwitcherPart from './DarkModeSwitcher.part';
import { AsideFooter } from '../../../../components/layouts/Aside/Aside';

const AsideFooterPart = () => {
	return (
		<AsideFooter>
			<UserTemplate />
			<DarkModeSwitcherPart />
		</AsideFooter>
	);
};

export default AsideFooterPart;
