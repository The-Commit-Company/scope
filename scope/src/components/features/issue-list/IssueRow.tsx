import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu'
import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { useMemo } from 'react'
import PrioritySelector from './PrioritySelector'
import UserSelector from './UserSelector'
import StatusSelector from './StatusSelector'
import IssueContextMenu from './ContextMenu/IssueContextMenu'


export type IssueRowItemType = Pick<ScopeIssue, 'name' | 'assigned_to' | 'creation' | 'description' | 'due_date' | 'priority' | 'status' | 'title'>
type IssueRowProps = {
    issue: IssueRowItemType
}

const IssueRow = ({ issue }: IssueRowProps) => {

    const dueDateFormatted = useMemo(() => {
        if (issue.due_date) {
            const date = new Date(issue.due_date)
            return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
        } else {
            return ''
        }
    }, [issue.due_date])
    return (
        <div>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="flex items-center justify-between rounded-sm space-x-1.5 p-3 border-b border-b-secondary hover:bg-muted">
                        <div className="flex items-center gap-2">
                            <div className='flex items-center justify-center w-4 h-4'>
                                <PrioritySelector priority={issue.priority} issueID={issue.name} />
                            </div>
                            <span className='text-xs font-light text-muted-foreground'>{issue.name}</span>
                            <div className='flex items-center justify-center w-4 h-4 mx-1'>
                                <StatusSelector status={issue.status} issueID={issue.name} />
                            </div>


                            <p className="text-sm font-medium">{issue.title}</p>

                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xs text-muted-foreground font-light">
                                {dueDateFormatted}
                            </span>
                            <UserSelector issueID={issue.name} userID={issue.assigned_to} />
                        </div>

                    </div>

                </ContextMenuTrigger>
                <IssueContextMenu issue={issue} />
            </ContextMenu>
        </div>
    )
}

export default IssueRow