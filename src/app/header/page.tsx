"use client";
import React, { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHook";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slice/MyFirstslice";
import { both, increment1, decrement1 } from "../redux/slice/SecoundSlice";
import { toggleMode } from "../redux/slice/ModeSlice";
import Icons from "@/icons";
import Tooltip from "../components/ToolTip";

const Page = () => {
  const { user, setUser } = useUser();
  const count = useAppSelector((mystate) => mystate.counterSlice);
  const sec = useAppSelector((secound) => secound.SecoundSlice);
  const modeSlice = useAppSelector((mode) => mode.ModeSlice);
  const dispatch = useAppDispatch();
  const dispatch1 = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  const mode = useAppSelector((state) => state.ModeSlice.value);
  console.log(mode, "mode");
  useEffect(() => {
    mode !== "dark"
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [mode]);

  return (
    <>
      <section className=" ">
        <div>
          <h1
            onClick={() =>
              setUser({
                name: "sahil",
                class: "2 fail",
              })
            }
            className="text-red-600"
          >
            {user.name}
          </h1>
        </div>
        <div>
          <h1 className="">{count.value}</h1>
          <button onClick={() => dispatch(increment())}>++++++</button>
          <button onClick={() => dispatch(decrement())}>--------</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            ***********
          </button>
        </div>

        <div>
          <h1 className="text-[200px]">{sec.value}</h1>
          <button onClick={() => dispatch1(increment1())}>++++++</button>
          <button onClick={() => dispatch1(decrement1())}>--------</button>
          <button onClick={() => dispatch1(both(5))}>***********</button>
        </div>
        <div className="flex items-center">
          <h1>{modeSlice.value}</h1>
          <Tooltip text={`${mode}`}>

          <button className="" onClick={handleToggle}>
            {<Icons className="w-8" type={`${mode != "dark" ? "darkmode" : "lightmode"}`} />}
          </button>
          </Tooltip>
        </div>
      </section>
    </>
  );
};

export default Page;
