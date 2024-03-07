import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectProps } from '@radix-ui/react-select'
import PriorityIcon from './PriorityIcon'
import { cn } from '@/lib/utils'


interface PrioritySelectProps extends SelectProps {
    triggerClass?: string
}
const PrioritySelect = ({ triggerClass, ...props }: PrioritySelectProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className={cn("w-[180px]", triggerClass)}>
                <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="No Priority">
                    <div className='flex items-center gap-2'>
                        <PriorityIcon priority='No Priority' />
                        No Priority
                    </div>
                </SelectItem>
                <SelectItem value="Urgent">
                    <div className='flex items-center gap-2'>
                        <PriorityIcon priority='Urgent' />
                        Urgent
                    </div>
                </SelectItem>
                <SelectItem value="High">
                    <div className='flex items-center gap-2'>
                        <PriorityIcon priority='High' />
                        High
                    </div>
                </SelectItem>
                <SelectItem value="Medium">
                    <div className='flex items-center gap-2'>
                        <PriorityIcon priority='Medium' />
                        Medium
                    </div>
                </SelectItem>
                <SelectItem value="Low">
                    <div className='flex items-center gap-2'>
                        <PriorityIcon priority='Low' />
                        Low
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

export default PrioritySelect