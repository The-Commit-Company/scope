import { ContextMenuItem } from '@/components/ui/context-menu'
import { Trash } from 'lucide-react'

type Props = {
    issueID: string
}

const DeleteMenuItem = ({ issueID }: Props) => {

    const onDelete = () => {
        // TODO: delete issue
        console.log("Deleting issue ", issueID)
    }
    return (
        <ContextMenuItem onClick={onDelete}>
            <Trash size={14} className="mr-2" />
            Delete
        </ContextMenuItem>
    )
}

export default DeleteMenuItem