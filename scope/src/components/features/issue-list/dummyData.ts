export type ActivityItem = {
    name: string,
    description: string,
    priority?: "High" | "Medium" | "Low",
    status?: "Open" | "Closed" | "Cancelled",
    type: 'Task' | 'Meeting' | 'Call',
    activity_code?: string,
    result_code?: string,
    is_due: boolean,
    note?: string,
    allocated_to: string

}

export const DUMMY_OPEN_ACTIVITIES: ActivityItem[] = [
    {
        name: "Follow-up call",
        description: "Follow up with potential customer",
        priority: "High",
        status: "Open",
        type: "Task",
        activity_code: "ACT001",
        result_code: "RES001",
        is_due: true,
        note: "Customer showed interest in a specific car model",
        allocated_to: "John Doe",
        date: "2022-10-10"
    },
    {
        name: "Sales meeting",
        description: "Meeting with customer to discuss car options",
        priority: "Medium",
        status: "Open",
        type: "Meeting",
        activity_code: "ACT002",
        result_code: "RES002",
        is_due: true,
        note: "Customer wants to test drive a few cars",
        allocated_to: "Jane Smith",
        starts_on: "2022-10-12",
        duration: "1 hour"
    },
    {
        name: "Outbound call",
        description: "Call potential customers to promote new car model",
        priority: "Low",
        status: "Open",
        type: "Call",
        activity_code: "ACT003",
        result_code: "RES003",
        is_due: false,
        note: "Offer special discounts for early adopters",
        allocated_to: "John Doe",
        starts_on: "2022-10-15",
        call_type: "Outbound",
        duration: "30 minutes"
    },
    {
        name: "Email follow-up",
        description: "Send follow-up email to potential customer",
        priority: "Medium",
        status: "Open",
        type: "Task",
        activity_code: "ACT004",
        result_code: "RES004",
        is_due: false,
        note: "Include product brochure and pricing details",
        allocated_to: "Jane Smith",
        date: "2022-10-18"
    },
    {
        name: "Inbound call",
        description: "Receive call from interested customer",
        priority: "High",
        status: "Open",
        type: "Call",
        activity_code: "ACT005",
        result_code: "RES005",
        is_due: false,
        note: "Answer customer questions and provide additional information",
        allocated_to: "John Doe",
        starts_on: "2022-10-20",
        call_type: "Inbound",
        duration: "15 minutes"
    },
    {
        name: "Product demo",
        description: "Provide product demonstration to potential customer",
        priority: "Medium",
        status: "Open",
        type: "Meeting",
        activity_code: "ACT006",
        result_code: "RES006",
        is_due: true,
        note: "Highlight key features and benefits",
        allocated_to: "Jane Smith",
        starts_on: "2022-10-22",
        duration: "45 minutes"
    },
    {
        name: "Follow-up call",
        description: "Follow up with potential customer",
        priority: "Low",
        status: "Open",
        type: "Task",
        activity_code: "ACT007",
        result_code: "RES007",
        is_due: false,
        note: "Customer requested more time to consider options",
        allocated_to: "John Doe",
        date: "2022-10-25"
    },
    {
        name: "Outbound call",
        description: "Call potential customers to promote new car model",
        priority: "High",
        status: "Open",
        type: "Call",
        activity_code: "ACT008",
        result_code: "RES008",
        is_due: false,
        note: "Offer limited-time discount for early adopters",
        allocated_to: "Jane Smith",
        starts_on: "2022-10-28",
        call_type: "Outbound",
        duration: "30 minutes"
    },
    {
        name: "Sales meeting",
        description: "Meeting with customer to discuss car options",
        priority: "Medium",
        status: "Open",
        type: "Meeting",
        activity_code: "ACT009",
        result_code: "RES009",
        is_due: false,
        note: "Customer wants to explore financing options",
        allocated_to: "John Doe",
        starts_on: "2022-10-30",
        duration: "1 hour"
    },
    {
        name: "Follow-up email",
        description: "Send follow-up email to potential customer",
        priority: "Low",
        status: "Open",
        type: "Task",
        activity_code: "ACT010",
        result_code: "RES010",
        is_due: false,
        note: "Include special offer for loyal customers",
        allocated_to: "Jane Smith",
        date: "2022-11-02"
    },
    {
        name: "Inbound call",
        description: "Receive call from interested customer",
        priority: "High",
        status: "Open",
        type: "Call",
        activity_code: "ACT011",
        result_code: "RES011",
        is_due: false,
        note: "Answer customer questions and provide additional information",
        allocated_to: "John Doe",
        starts_on: "2022-11-05",
        call_type: "Inbound",
        duration: "20 minutes"
    },
    {
        name: "Product demo",
        description: "Provide product demonstration to potential customer",
        priority: "Medium",
        status: "Open",
        type: "Meeting",
        activity_code: "ACT012",
        result_code: "RES012",
        is_due: false,
        note: "Highlight key features and benefits",
        allocated_to: "Jane Smith",
        starts_on: "2022-11-08",
        duration: "45 minutes"
    },
    {
        name: "Follow-up call",
        description: "Follow up with potential customer",
        priority: "Low",
        status: "Open",
        type: "Task",
        activity_code: "ACT013",
        result_code: "RES013",
        is_due: false,
        note: "Customer requested more time to consider options",
        allocated_to: "John Doe",
        date: "2022-11-11"
    }
];

export const USER_INFO = {
    "John Doe": {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        email: "john.doe@example.com"
    },
    "Jane Smith": {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        email: "jane.smith@example.com"
    },
    "Mike Johnson": {
        name: "Mike Johnson",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg",
        email: "mike.johnson@example.com",
    }
}