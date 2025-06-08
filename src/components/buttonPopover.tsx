import { Popover, Button, Portal } from "@chakra-ui/react";
import { useState } from "react";

export interface ButtonPopoverProps {
    title: string;
    description: string;
}

export default function ButtonPopover({ title, description }: ButtonPopoverProps) {
    const [open, setOpen] = useState(false)

    return(
        <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Popover.Trigger asChild>
            <Button size="sm" variant="outline">
            {title}
            </Button>
        </Popover.Trigger>
        <Portal>
            <Popover.Positioner>
            <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                    {description}
                </Popover.Body>
            </Popover.Content>
            </Popover.Positioner>
        </Portal>
        </Popover.Root>
    )
}
