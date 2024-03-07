import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { forwardRef } from 'react'
import StatusIcon from '@/components/common/StatusIcon'

type StatusSelectorProps = {
    status: ScopeIssue['status'],
    issueID: string
}

const StatusSelector = ({ status, issueID }: StatusSelectorProps) => {

    const onStatusChange = (p: ScopeIssue['status']) => {
        //TODO: update priority
        console.log("Change status to", p, " for issue ", issueID)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <StatusIcon status={status} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <StatusOptionItem status="Backlog" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="ToDo" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="In Progress" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="In Review" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="Completed" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="Cancelled" selected={status} onClick={onStatusChange} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

interface PriorityOptionItemProps {
    status: ScopeIssue['status'],
    selected: ScopeIssue['status'],
    onClick: (p: ScopeIssue['status']) => void
}
const StatusOptionItem = forwardRef<any, PriorityOptionItemProps>(({ status, selected, onClick }, ref) => {

    return <DropdownMenuCheckboxItem ref={ref} checked={status === selected} onCheckedChange={() => onClick(status)}>
        <div className="flex space-x-1.5 items-center justify-between w-32">
            <span>{status}</span>
            <span className='text-right'>
                <StatusIcon status={status} />
            </span>
        </div>
    </DropdownMenuCheckboxItem>
})

export default StatusSelector