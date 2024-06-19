"use client"

import { useAppSelector } from "@/hooks/ReduxHook";
import Accordion from "./components/Accordian";
import PaginationIndex from "./components/SimplePagination/PaginationIndex";
import TestStopScrolling from "./components/TestStopScrolling";
import UserProfile from "./components/UserProfile";
import { useEffect } from "react";
import Header from "./header/page";

export default function Home() {


  return (
    <main>
      <Header />
      <UserProfile />
      <TestStopScrolling />
      <Accordion />
      <PaginationIndex />
    </main>
  );
}
