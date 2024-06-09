export type TModule = {
	id: string;
	name: string;
};

// CERT TEMPLATES
export const modulesDbList = {
	customer: { id: 'customer', name: 'Customer' },
	product: { id: 'product', name: 'Product' },
	category: { id: 'category', name: 'Category' },
};

const modulesDb: TModule[] = Object.values(modulesDbList);

export default modulesDb;
