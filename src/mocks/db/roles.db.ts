import { modulesDbList } from './certificates.db';
import { TPermission } from '../../constants/permissions.constant';

export type TRole = {
	id: string;
	name: string;
	certsRequired: { [key: string]: TPermission['value'] };
};

export const rolesDbList = {
	lpa: {
		id: 'lpa',
		name: 'LPA',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	operator: {
		id: 'operator',
		name: 'Operator',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	plantNetworkLeader: {
		id: 'plantNetworkLeader',
		name: 'Plant Network Leader',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	trainee: {
		id: 'plantNetworkLeader',
		name: 'Plant Network Leader',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	backupPnl: {
		id: 'backupPnl',
		name: 'Backup PNL',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	},
	personnel: {
		id: 'personnel',
		name: 'Personnel',
		certsRequired: {
			[modulesDbList.customer.id]: 7 as TPermission['value'],
			[modulesDbList.product.id]: 7 as TPermission['value'],
			[modulesDbList.category.id]: 7 as TPermission['value'],
		},
	}
};

const rolesDb: TRole[] = Object.values(rolesDbList);

export default rolesDb;
