
export interface ScopeIssue{
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
	/**	Project : Link - Scope Project	*/
	project: string
	/**	Title : Data	*/
	title: string
	/**	Description : Text Editor	*/
	description?: string
	/**	Parent Issue : Link - Scope Issue	*/
	parent_scope_issue?: string
	/**	Priority : Select	*/
	priority?: "No Priority" | "Low" | "Medium" | "High" | "Urgent"
	/**	Status : Select	*/
	status?: "Backlog" | "ToDo" | "In Progress" | "In Review" | "Completed" | "Cancelled"
	/**	Assigned To : Link - User	*/
	assigned_to?: string
	/**	Due Date : Date	*/
	due_date?: string
}