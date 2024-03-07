import PriorityIcon from '@/components/common/PriorityIcon'
import { ContextMenuCheckboxItem, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from '@/components/ui/context-menu'
import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { SignalHigh } from 'lucide-react'
import { forwardRef } from 'react'

type PrioritySubMenuProps = {
    issueID: string,
    priority: ScopeIssue['priority']
}

const PrioritySubMenu = ({ issueID, priority }: PrioritySubMenuProps) => {

    const onPriorityChange = (p: ScopeIssue['priority']) => {
        //TODO: update priority
        console.log("Change priority to", p, " for issue ", issueID)
    }

    return (
        <ContextMenuSub>
            <ContextMenuSubTrigger>
                <SignalHigh size={14} className="mr-2" />
                Change Priority
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
                <PriorityOptionItem priority="No Priority" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Urgent" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="High" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Medium" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Low" selected={priority} onClick={onPriorityChange} />
            </ContextMenuSubContent>
        </ContextMenuSub>
    )
}

interface PriorityOptionItemProps {
    priority: ScopeIssue['priority'],
    selected: ScopeIssue['priority'],
    onClick: (p: ScopeIssue['priority']) => void
}
const PriorityOptionItem = forwardRef<any, PriorityOptionItemProps>(({ priority, selected, onClick }, ref) => {

    return <ContextMenuCheckboxItem ref={ref} checked={priority === selected} onCheckedChange={() => onClick(priority)}>
        <div className="flex space-x-1.5 items-center justify-between w-32">
            <span>{priority}</span>
            <span className='text-right'>
                <PriorityIcon priority={priority} />
            </span>
        </div>
    </ContextMenuCheckboxItem>
})

export default PrioritySubMenu