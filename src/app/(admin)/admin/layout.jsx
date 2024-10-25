import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

function layout({ children }) {
  return (
    <div>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full">
          <Link href={"/admin/dashboard"}>
            <TabsTrigger value="dashboard">DashBoard</TabsTrigger>
          </Link>

          <Link href={"/admin/teachers"}>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
          </Link>

          <Link href={"/admin/students"}>
            <TabsTrigger value="students">Students</TabsTrigger>
          </Link>

          <Link href={"/admin/courses"}>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </Link>

          <Link href={"/admin/batches"}>
            <TabsTrigger value="batches">Batches</TabsTrigger>
          </Link>
        </TabsList>

        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="teachers">{children}</TabsContent>
        <TabsContent value="students">{children}</TabsContent>
        <TabsContent value="courses">{children}</TabsContent>
        <TabsContent value="batches">{children}</TabsContent>
      </Tabs>
    </div>
  );
}

export default layout;
