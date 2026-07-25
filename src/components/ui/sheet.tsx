import type { ComponentProps } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger
const SheetClose = Dialog.Close

const sideClasses = {
  right:
    'inset-y-0 right-0 border-l data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full',
  left: 'inset-y-0 left-0 border-r data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full',
} as const

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: ComponentProps<typeof Dialog.Popup> & {
  side?: keyof typeof sideClasses
}) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
      <Dialog.Popup
        className={cn(
          'fixed z-50 flex w-72 max-w-[80vw] flex-col gap-6 border-border bg-background py-6 shadow-lg transition-transform duration-200 ease-out outline-none',
          sideClasses[side],
          className,
        )}
        {...props}
      >
        <Dialog.Close
          aria-label="Close menu"
          className="absolute top-4 right-4 rounded-md p-1 text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          <X className="size-4" />
        </Dialog.Close>
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1 px-6', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn('text-sm font-medium text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
}
