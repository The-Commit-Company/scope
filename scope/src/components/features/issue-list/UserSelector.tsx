import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { useFrappeGetCall } from 'frappe-react-sdk'
import { CircleUser } from 'lucide-react'

type UserSelectorProps = {
    issueID: string,
    userID?: string
}

interface UserFields {
    first_name: string,
    last_name: string,
    email: string,
    user_image: string
}

const UserSelector = ({ userID, issueID }: UserSelectorProps) => {

    // const { data } = useFrappeGetCall<{ message: UserFields }>('frappe.client.get_value', {
    //     doctype: "User",
    //     filters: userID,
    //     fieldname: JSON.stringify(["first_name", "last_name", "email", "user_image"])
    // }, userID ? undefined : null, {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: false,
    // })

    const onUserChange = (user: string) => {
        console.log("Change user to", user, " for issue ", issueID)
    }

    return (
        <HoverCard open={userID ? undefined : false}>
            <HoverCardTrigger>
                {userID ?
                    <Avatar>
                        <AvatarFallback className='text-xs'>{userID[0].toUpperCase()}</AvatarFallback>
                        {/* // TODO: Add AvatarImage src by using a custom API */}
                        <AvatarImage src={''} />
                    </Avatar>
                    :
                    <CircleUser size={20} className="text-gray-500" />
                }
            </HoverCardTrigger>
            <HoverCardContent align='end' className='overflow-hidden'>
                <div className="flex items-center space-x-2">
                    {userID ?
                        <Avatar className='w-8 h-8'>
                            <AvatarFallback>{userID[0]}</AvatarFallback>
                            {/* // TODO: Add AvatarImage src by using a custom API */}
                            <AvatarImage src={''} />
                        </Avatar>
                        :
                        <CircleUser size={16} className="text-gray-500" />
                    }
                    {userID ?
                        <div className="flex flex-col -space-y-0.5 text-ellipsis overflow-hidden">
                            {/* // TODO: Add user name and email by using a custom API */}
                            <span className="font-semibold text-sm">{"User name"}</span>
                            <span className="text-muted-foreground text-xs overflow-hidden text-ellipsis">{userID}</span>
                        </div>
                        :
                        <span className="text-muted-foreground">Unassigned</span>
                    }
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default UserSelector