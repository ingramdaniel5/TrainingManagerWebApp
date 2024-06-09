export type TModule = {
	id: string;
	name: string;
};

export type TCertTemplate = {
	id: string;
	name: string;
	classDates:string;
	classTime: string;
	location: string;
	instructor: string;
	classWriting: string;
	testDate: string;
	expirationDate: string;
	classCode: string;
	year: string;
	signature: string;
	rosterPage: string;
	requiredOther: string[];
};

// CERT TEMPLATES
export const modulesDbList = {
	customer: { id: 'customer', name: 'Customer' },
	product: { id: 'product', name: 'Product' },
	category: { id: 'category', name: 'Category' },
};

export const certTemplatesDbList = {
    contractorSupervisorInitial: { 
		id: 'contractorSupervisorInitial',
		name: 'Contractor Supervisor Initial', 
		classDates: "", 
		classTime: "", 
		location: "", 
		instructor: "", 
		classWriting: "attended and successfully completed a four-hour Asbestos Operations & Maintenance Refresher course in accordance with 29 CFR 1926.1101, the Asbestos Construction Standard.  The content of the course reviewed topics listed in 40 CFR 763.92(a)(2).",
		testDate: "", 
		expirationDate:"", 
		classCode: "", 
		year: "" , 
		signature: "", 
		rosterPage: "",  
		requiredOther: [] 
	},
    lpaAdvanced: { 
		id: 'lpaAdvanced', 
		name: 'LPA Advanced', 
		classDates: "", 
		classTime: "", 
		location: "", 
		instructor: "", 
		classWriting: "attended and successfully completed a four-hour Asbestos Operations & Maintenance Refresher course in accordance with 29 CFR 1926.1101, the Asbestos Construction Standard.  The content of the course reviewed topics listed in 40 CFR 763.92(a)(2).", 
		testDate: "", 
		expirationDate: "", 
		classCode: "", 
		year: "" , 
		signature: "", 
		rosterPage: "", 
		requiredOther: ["contractorSupervisorInitial"] 
	},
    lpaSuperAdvanced: { 
		id: 'lpaSuperAdvanced', 
		name: 'LPA Super Advanced', 
		classDates: "", 
		classTime: "", 
		location: "", 
		instructor: "", 
		classWriting: "attended and successfully completed a four-hour Asbestos Operations & Maintenance Refresher course in accordance with 29 CFR 1926.1101, the Asbestos Construction Standard.  The content of the course reviewed topics listed in 40 CFR 763.92(a)(2).", 
		testDate: "", 
		expirationDate: "", 
		classCode: "", 
		year: "", 
		signature: "", 
		rosterPage: "", 
		requiredOther: ["lpaAdvanced"] },
    lpaExpert: { 
		id: 'lpaExpert', 
		name: 'LPA Expert', 
		classDates: "", 
		classTime: "", 
		location: "", 
		instructor: "", 
		classWriting: "attended and successfully completed a four-hour Asbestos Operations & Maintenance Refresher course in accordance with 29 CFR 1926.1101, the Asbestos Construction Standard.  The content of the course reviewed topics listed in 40 CFR 763.92(a)(2).", 
		testDate: "", 
		expirationDate: "", 
		classCode: "", 
		year: "" , 
		signature: "", 
		rosterPage: "", 
		requiredOther: ["lpaSuperAdvanced"] },
    lpaSuperExpert: { 
		id: "lpaSuperExpert", 
		name: 'LPA Super Expert', 
		classDates: "", 
		classTime: "", 
		location: "", 
		instructor: "", 
		classWriting: "attended and successfully completed a four-hour Asbestos Operations & Maintenance Refresher course in accordance with 29 CFR 1926.1101, the Asbestos Construction Standard.  The content of the course reviewed topics listed in 40 CFR 763.92(a)(2).", 
		testDate: "", 
		expirationDate: "", 
		classCode: "", 
		year: "", 
		Signature: "", 
		rosterPage: "",
		requiredOther: [] 
	}
};




const modulesDb: TModule[] = Object.values(modulesDbList);

export default modulesDb;
