import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScopeIssue } from '@/types/Scope/ScopeIssue'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Textarea } from "@/components/ui/textarea"
import PrioritySelect from "@/components/common/PrioritySelect"
import StatusSelect from "@/components/common/StatusSelect"

type Props = {}

const CreateIssueDialog = (props: Props) => {

    const form = useForm<ScopeIssue>()

    const onSubmit = (values: ScopeIssue) => {

        console.log("Form values", values)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size='sm'>
                    <Plus size={14} className="mr-2" />
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>New Issue</DialogTitle>
                            <DialogDescription className="sr-only">
                                Create a new issue
                            </DialogDescription>
                        </DialogHeader>
                        <div className='py-4 flex flex-col gap-2'>
                            <FormField
                                control={form.control}
                                name="title"
                                rules={{ required: 'Issue title is required', maxLength: { value: 140, message: "Title cannot be more than 140 characters." } }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter issue title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter issue description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name='priority'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Priority</FormLabel>
                                            <FormControl>
                                                <PrioritySelect
                                                    value={field.value}
                                                    triggerClass="w-full"
                                                    onValueChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='status'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Status</FormLabel>
                                            <FormControl>
                                                <StatusSelect
                                                    value={field.value}
                                                    triggerClass="w-full"
                                                    onValueChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <DialogClose />
                        <DialogFooter>
                            <Button type='submit' size='sm'>
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>

        </Dialog>
    )
}

export default CreateIssueDialog