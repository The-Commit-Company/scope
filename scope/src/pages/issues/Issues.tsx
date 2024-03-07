import { ErrorBanner } from "@/components/common/ErrorBanner"
import PrioritySelect from "@/components/common/PrioritySelect"
import StatusSelect from "@/components/common/StatusSelect"
import CreateIssueDialog from "@/components/features/issue-list/CreateIssueDialog"
import IssueListLoader from "@/components/features/issue-list/IssueListLoader"
import IssueRow from "@/components/features/issue-list/IssueRow"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { H1 } from "@/components/ui/typography"
import { ScopeIssue } from "@/types/Scope/ScopeIssue"
import { Plus } from "lucide-react"
import { useState } from "react"


const ISSUES_DATA: Partial<ScopeIssue>[] = [
    {
        "name": "RAV-001",
        "title": "Use websockets for message reactions on mobile app",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "Urgent",
        "creation": "2024-03-07 18:01:05.008615",
        "assigned_to": "nikhil@thecommit.company",
        "due_date": "2024-03-02",
        "status": "ToDo",
        'project': 'RAV'
    },
    {
        "name": "RAV-002",
        "title": "Add skeleton loader for messages on the web app",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "Medium",
        "creation": "2024-03-07 18:20:03.518934",
        "assigned_to": "sumit.jain@thecommit.company",
        "due_date": "2024-03-02",
        "status": "Backlog",
        'project': 'RAV'
    },
    {
        "name": "RAV-003",
        "title": "Implement Two factor authentication on mobile app",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "High",
        "creation": "2024-03-07 20:40:27.304126",
        "assigned_to": "sumit.jain@thecommit.company",
        "due_date": "2024-04-06",
        "status": "In Review",
        'project': 'RAV'
    },
    {
        "name": "RAV-004",
        "title": "Allow users to configure webhooks for message events",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "Medium",
        "creation": "2024-03-07 21:31:25.852997",
        "assigned_to": "sumit.jain@thecommit.company",
        "due_date": "2024-03-01",
        "status": "In Progress",
        'project': 'RAV'
    },
    {
        "name": "RAV-005",
        "title": "Raven Bots: allow developers to create bots on Raven",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "Medium",
        "creation": "2024-03-07 21:56:18.936205",
        "assigned_to": "aditya.patil@thecommit.company",
        "due_date": "2024-03-02",
        "status": "Completed",
        'project': 'RAV'
    },
    {
        "name": "RAV-006",
        "title": "Allow users to login with their mobile number",
        "description": "<div class=\"ql-editor read-mode\"><p><br></p></div>",
        "priority": "No Priority",
        "creation": "2024-03-07 21:59:19.149157",
        "assigned_to": "prathamesh.kurunkar@thecommit.company",
        "due_date": "2024-03-02",
        "status": "Cancelled",
        'project': 'RAV'
    }
]
const Issues = () => {

    /** Filters */
    const [status, setStatus] = useState<string>("")
    const [priority, setPriority] = useState<string>("")

    /** TODO: Fetch data here */

    return (
        <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <H1 className="text-2xl lg:text-2xl">Issues</H1>
                <CreateIssueDialog />
            </div>
            <Separator />
            {/* {isLoading && <IssueListLoader />} */}
            {/* {error && <ErrorBanner error={error} />} */}
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    {/* // TODO: Remove filters like this later. We will have a separate component with a nested dropdown */}
                    <PrioritySelect value={priority} onValueChange={setPriority} />
                    <StatusSelect value={status} onValueChange={setStatus} />
                </div>
                <div>
                    {ISSUES_DATA.map(issue => <IssueRow key={issue.name} issue={issue} />)}
                </div>
            </div>

        </div>
    )
}

export default Issues