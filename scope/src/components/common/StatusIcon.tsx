import { ScopeIssue } from "@/types/Scope/ScopeIssue"
import { PiCheckCircleDuotone, PiCircleBold, PiCircleDashedBold, PiCircleHalfDuotone, PiXCircleDuotone } from 'react-icons/pi'

const StatusIcon = ({ status, size = 18 }: { status?: ScopeIssue['status'], size?: number }) => {

    if (status === "Backlog") {
        return <PiCircleDashedBold size={size} className="text-gray-400" />
    } else if (status === "ToDo") {
        return <PiCircleBold size={size} className="text-gray-500" />
    } else if (status === "In Progress") {
        return <PiCircleHalfDuotone size={size} className="text-yellow-500" />
    } else if (status === "In Review") {
        return <PiCircleHalfDuotone size={size} className="text-blue-500" />
    } else if (status === "Completed") {
        return <PiCheckCircleDuotone size={size} className="text-green-500" />
    } else if (status === "Cancelled") {
        return <PiXCircleDuotone size={size - 2} strokeWidth={1} className="text-gray-700" />
    }

    return null
}

export default StatusIcon