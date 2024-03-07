import StatusIcon from '@/components/common/StatusIcon'
import { ContextMenuCheckboxItem, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from '@/components/ui/context-menu'
import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { forwardRef } from 'react'
import { PiCircleHalfDuotone } from 'react-icons/pi'

type StatusSubMenuProps = {
    issueID: string,
    status: ScopeIssue['status']
}

const StatusSubMenu = ({ issueID, status: status }: StatusSubMenuProps) => {

    const onStatusChange = (s: ScopeIssue['status']) => {
        //TODO: update status
        console.log("Change status to", s, " for issue ", issueID)
    }

    return (
        <ContextMenuSub>
            <ContextMenuSubTrigger>
                <PiCircleHalfDuotone size={14} className="mr-2" />
                Change Status
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
                <StatusOptionItem status="Backlog" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="ToDo" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="In Progress" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="In Review" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="Completed" selected={status} onClick={onStatusChange} />
                <StatusOptionItem status="Cancelled" selected={status} onClick={onStatusChange} />
            </ContextMenuSubContent>
        </ContextMenuSub>
    )
}

interface StatusOptionItemProps {
    status: ScopeIssue['status'],
    selected: ScopeIssue['status'],
    onClick: (p: ScopeIssue['status']) => void
}
const StatusOptionItem = forwardRef<any, StatusOptionItemProps>(({ status, selected, onClick }, ref) => {

    return <ContextMenuCheckboxItem ref={ref} checked={status === selected} onCheckedChange={() => onClick(status)}>
        <div className="flex space-x-1.5 items-center justify-between w-32">
            <span>{status}</span>
            <span className='text-right'>
                <StatusIcon status={status} />
            </span>
        </div>
    </ContextMenuCheckboxItem>
})

export default StatusSubMenu