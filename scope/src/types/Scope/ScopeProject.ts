
export interface ScopeProject{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Title : Data	*/
	title: string
	/**	Project ID : Data - Short code for project. e.g. "RAV"	*/
	project_id: string
	/**	Description : Text Editor	*/
	description?: string
	/**	Start Date : Date	*/
	start_date?: string
	/**	End Date : Date	*/
	end_date?: string
}