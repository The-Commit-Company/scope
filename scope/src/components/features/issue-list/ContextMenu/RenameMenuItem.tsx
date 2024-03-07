import { ContextMenuItem } from '@/components/ui/context-menu'
import { Pencil } from 'lucide-react'

type Props = {
    issueID: string
}

const RenameMenuItem = (props: Props) => {

    return (
        <ContextMenuItem>
            <Pencil size={14} className="mr-2" />
            Rename
        </ContextMenuItem>
    )
}

export default RenameMenuItem