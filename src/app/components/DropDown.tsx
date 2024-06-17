"use client";

import { dropdownprops } from "@/interface/interface";
// import Icons from "@/icons/Index";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";


/**
 * Dropdown component
 * 
 * This component renders a dropdown menu with customizable properties.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onclick - The function to handle the click event.
 * @param {string} props.testclass - The CSS class for testing purposes.
 * @param {boolean} props.positionsta - The boolean to control the position state.
 * @param {string} props.heading - The heading text for the dropdown.
 * @param {ReactNode} props.children - The child elements to be rendered inside the dropdown.
 * @param {string} props.image - The image/icon type for the dropdown arrow.
 * @param {string} props.className - The CSS class for the dropdown container.
 * @param {string} props.directionshovercontent - The CSS class for the hover content direction.
 * @param {string} props.arrowimageclass - The CSS class for the arrow image.
 * @returns {React.Element} The rendered dropdown component.
 */
const Dropdown = ({
    onclick,
    testclass,
    positionsta,
    heading,
    children,
    image,
    className,
    directionshovercontent,
    arrowimageclass,
}: dropdownprops) => {
    return (
        <>
            <div
                className={` ${positionsta === true ? "" : "relative"} cursor-pointer`}
            >
                <div className={cn`flex ${className} w-full`}>
                    {/** 
           * Heading text for the dropdown
           * 
           * @element
           */}
                    <p className={cn`${testclass}`}>{heading}</p>
                    {/** 
           * Icon for the dropdown arrow
           * 
           * @element
           */}
                    <div className={cn`${arrowimageclass}`}>
                        {/* <Icons type={`${image}`} /> */}
                    </div>
                </div>
                {onclick === true ? (
                    <>{children}</>
                ) : (
                    <>
                        {/** 
             * Dropdown content to be displayed on hover
             * 
             * @element
             */}
                        <div
                            className={`group-hover:opacity-100 shadow-2xl group-hover:visible duration-300 ${directionshovercontent} z-[9] absolute opacity-0 invisible`}
                        >
                            {children}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Dropdown;



// <Dropdown
//                         positionsta={true}
//                         directionshovercontent="left-0  2xl:overflow-hidden  overflow-scroll max-w-[97vw] "
//                         testclass=" tab:text-[13px]  lg:text_14_1 xl:text_16_2 text-blue_gray_700 whitespace-nowrap  hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px] "
//                         heading={`Man's Fashion`}
//                     >
//                         <div className="bg-white  p-6   max-w-[1650px] 2xl:overflow-hidden  overflow-scroll  flex gap-[30px] w-[1650px] ">
//                             {headerdata?.Dropdowndata?.slice(0, 1).map((item, index) => {
//                                 return (
//                                     <Fragment key={Date.now() + index}>
//                                         {item?.dropdata?.map((item, index) => {
//                                             return (
//                                                 <>
//                                                     <div
//                                                         key={Date.now() + index}
//                                                         className="flex gap-[30px] "
//                                                     >
//                                                         <div className="flex flex-col gap-[14px] w-[188px]">
//                                                             <li className=" list-none pb-[6px] text-[45px] text_16_1 text-blue_gray_800 border-b-[1px] mb-[4px] border-blue_gray_100 ">
//                                                                 {item.heading}
//                                                             </li>
//                                                             {item?.list?.map((item, index) => {
//                                                                 return (
//                                                                     <li
//                                                                         key={Date.now() + index}
//                                                                         className=" hover:border-l-[2px] border-[#f57e5d] hover:text-light_primary duration-300 transform hover:pl-[3px]  text_14_1 text-blue_gray_500  list-none whitespace-nowrap w-full max-w-[188px]"
//                                                                     > <Link href={"#"}>
//                                                                             {item}
//                                                                         </Link>
//                                                                     </li>
//                                                                 );
//                                                             })}
//                                                         </div>
//                                                     </div>
//                                                 </>
//                                             );
//                                         })}
//                                     </Fragment>
//                                 );
//                             })}
//                             <div className="relative flex justify-center">
//                                 <Image
//                                     width={280}
//                                     height={352}
//                                     className=" rounded-md"
//                                     src="/images/boyimagedropdown.png"
//                                     alt="img"
//                                 />
//                                 <Link href={"/exploreByCategories"}>
//                                     <div >
//                                         <div className="bg-white py-[10px] rounded-md absolute bottom-[8px] right-[8px] left-[8px] md:right-3 md:left-3 md:bottom-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5 ">
//                                             <p className="text_20_12 text-blue_gray_600 text-center">
//                                                 Best Offer On Western Wear
//                                             </p>
//                                             <h3 className="text_34_20 text-light_primary text-center mt-[2px]">
//                                                 40 - 60% Off
//                                             </h3>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </Dropdown>