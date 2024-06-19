"use client"

import { useAppSelector } from "@/hooks/ReduxHook";
import Accordion from "./components/Accordian";
import PaginationIndex from "./components/SimplePagination/PaginationIndex";
import TestStopScrolling from "./components/TestStopScrolling";
import UserProfile from "./components/UserProfile";
import Header from "./header/page";
import { useEffect } from "react";

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
