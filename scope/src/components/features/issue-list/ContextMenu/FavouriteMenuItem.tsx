import { ContextMenuItem } from '@/components/ui/context-menu'
import { Copy, Star } from 'lucide-react'

type Props = {
    issueID: string,
}

const FavouriteMenuItem = (props: Props) => {
    return (
        <ContextMenuItem>
            <Star size={14} className="mr-2" />
            Favourite
        </ContextMenuItem>
    )
}

export default FavouriteMenuItem