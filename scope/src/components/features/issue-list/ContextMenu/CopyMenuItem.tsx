import { ContextMenuItem } from '@/components/ui/context-menu'
import { Copy } from 'lucide-react'

type Props = {}

const CopyMenuItem = (props: Props) => {
    return (
        <ContextMenuItem>
            <Copy size={14} className="mr-2" />
            Copy
        </ContextMenuItem>
    )
}

export default CopyMenuItem