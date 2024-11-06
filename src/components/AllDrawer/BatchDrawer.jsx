'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const trainers = ["John Doe", "Jane Smith", "Alice Johnson"]; // Mock data for trainers
const courses = ["JavaScript Basics", "React Intermediate", "CSS Fundamentals"]; // Mock data for courses

export function BatchDrawer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BatchForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input type="text" id="batchName" defaultValue="" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="merged">Merged</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Trainer" />
          </SelectTrigger>
          <SelectContent>
            {trainers.map((trainer) => (
              <SelectItem key={trainer} value={trainer}>
                {trainer}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="students">No of Students</Label>
        <Input type="number" id="students" defaultValue="" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Add Batch</Button>
    </form>
  );
}
