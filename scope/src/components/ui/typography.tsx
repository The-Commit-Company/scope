import { cn } from "@/lib/utils"
import { HTMLProps, forwardRef } from "react"

export const H1 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>((props, ref) => {
    return (
        <h1
            ref={ref}
            {...props}
            className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", props.className)} />
    )
})


export const H2 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>((props, ref) => {
    return (
        <h2
            ref={ref}
            {...props}
            className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", props.className)} />
    )
})

export const H3 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>((props, ref) => {
    return (
        <h3
            ref={ref}
            {...props}
            className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", props.className)} />
    )
})

export const H4 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>((props, ref) => {
    return (
        <h4
            ref={ref}
            {...props}
            className={cn("scroll-m-20 text-xl font-semibold tracking-tight", props.className)} />
    )
})

export const Text = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>((props, ref) => {
    return (
        <p
            ref={ref}
            {...props}
            className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)} />
    )
})

export const Blockquote = forwardRef<HTMLQuoteElement, HTMLProps<HTMLQuoteElement>>((props, ref) => {
    return (
        <blockquote
            ref={ref}
            {...props}
            className={cn("mt-6 border-l-2 pl-6 italic", props.className)} />
    )
})

export const List = forwardRef<HTMLUListElement, HTMLProps<HTMLUListElement>>((props, ref) => {
    return (
        <ul
            ref={ref}
            {...props}
            className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)} />
    )
})

export const InlineCode = forwardRef<HTMLElement, HTMLProps<HTMLElement>>((props, ref) => {
    return (
        <code
            ref={ref}
            {...props}
            className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", props.className)} />
    )
})