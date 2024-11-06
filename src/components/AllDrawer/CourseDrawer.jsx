'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CourseDrawer() {
  const [open, setOpen] = React.useState(false)
//   const isDesktop = useMediaQuery("(min-width: 768px)")
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Course</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile here. Click save when you're done. */}
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Course</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Course</DrawerTitle>
          <DrawerDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="name" id="name" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">Duration</Label>
        <Input id="duration" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="discription">Discription</Label>
        <Input id="discription" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        
      <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active">Active</SelectItem>
    <SelectItem value="not-active">Not Active</SelectItem>
  </SelectContent>
</Select>
      </div>



      <Button type="submit">Add Course</Button>
    </form>
  )
}
