import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectProps } from '@radix-ui/react-select'
import StatusIcon from './StatusIcon'
import { cn } from '@/lib/utils'


interface StatusSelectProps extends SelectProps {
    triggerClass?: string
}
const StatusSelect = ({ triggerClass, ...props }: StatusSelectProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className={cn("w-[180px]", triggerClass)}>
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Backlog">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='Backlog' />
                        Backlog
                    </div>
                </SelectItem>
                <SelectItem value="ToDo">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='ToDo' />
                        ToDo
                    </div>
                </SelectItem>
                <SelectItem value="In Progress">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='In Progress' />
                        In Progress
                    </div>
                </SelectItem>
                <SelectItem value="In Review">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='In Review' />
                        In Review
                    </div>
                </SelectItem>
                <SelectItem value="Completed">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='Completed' />
                        Completed
                    </div>
                </SelectItem>
                <SelectItem value="Cancelled">
                    <div className='flex items-center gap-2'>
                        <StatusIcon status='Cancelled' />
                        Cancelled
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

export default StatusSelect