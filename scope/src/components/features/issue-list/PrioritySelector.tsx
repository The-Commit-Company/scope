import PriorityIcon from '@/components/common/PriorityIcon'
import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { forwardRef } from 'react'

type PrioritySelectorProps = {
    priority: ScopeIssue['priority'],
    issueID: string
}

const PrioritySelector = ({ priority, issueID }: PrioritySelectorProps) => {

    const onPriorityChange = (p: ScopeIssue['priority']) => {
        //TODO: update priority
        console.log("Change priority to", p, " for issue ", issueID)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <PriorityIcon priority={priority} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <PriorityOptionItem priority="No Priority" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Urgent" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="High" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Medium" selected={priority} onClick={onPriorityChange} />
                <PriorityOptionItem priority="Low" selected={priority} onClick={onPriorityChange} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

interface PriorityOptionItemProps {
    priority: ScopeIssue['priority'],
    selected: ScopeIssue['priority'],
    onClick: (p: ScopeIssue['priority']) => void
}
const PriorityOptionItem = forwardRef<any, PriorityOptionItemProps>(({ priority, selected, onClick }, ref) => {

    return <DropdownMenuCheckboxItem ref={ref} checked={priority === selected} onCheckedChange={() => onClick(priority)}>
        <div className="flex space-x-1.5 items-center justify-between w-32">
            <span>{priority}</span>
            <span className='text-right'>
                <PriorityIcon priority={priority} />
            </span>
        </div>
    </DropdownMenuCheckboxItem>
})

export default PrioritySelector