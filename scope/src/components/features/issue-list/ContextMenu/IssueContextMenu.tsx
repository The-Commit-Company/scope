import { ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from '@/components/ui/context-menu'
import PrioritySubMenu from './PrioritySubMenu'
import { IssueRowItemType } from '../IssueRow'
import DeleteMenuItem from './DeleteMenuItem'
import RenameMenuItem from './RenameMenuItem'
import CopyMenuItem from './CopyMenuItem'
import FavouriteMenuItem from './FavouriteMenuItem'
import StatusSubMenu from './StatusSubMenu'

type Props = {
    issue: IssueRowItemType
}

const IssueContextMenu = ({ issue }: Props) => {
    return (
        <ContextMenuContent className='min-w-48'>
            <StatusSubMenu issueID={issue.name} status={issue.status} />
            <PrioritySubMenu issueID={issue.name} priority={issue.priority} />
            <RenameMenuItem issueID={issue.name} />
            <ContextMenuSeparator />
            <CopyMenuItem />
            <FavouriteMenuItem issueID={issue.name} />
            <ContextMenuSeparator />
            <DeleteMenuItem issueID={issue.name} />
        </ContextMenuContent>
    )
}

export default IssueContextMenu