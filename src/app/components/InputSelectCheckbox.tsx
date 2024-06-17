// {banks?.map((option, index) => (
//     <div key={option?.id || Date.now() + index} className="p-3 border-[1px] border-extra_4 rounded-[6px]">
//       <div onClick={() => handleCheck(index)} className="flex gap-[6px] justify-between items-center cursor-pointer">
//         <div className="flex flex-row-reverse items-center text_16_2 text-blue_gray_500 rounded-full">
//           {/* Bank name label */}
//           <label className="cursor-pointer">
//             {option?.name}
//           </label>
//           <div className="relative flex">
//             {/* Checkbox for selecting bank */}
//             <input
//               type="checkbox"
//               checked={index === checkedIndex}
//               readOnly
//               className={cn(
//                 "hover:before:opacity-10 m-[10px] before:content[''] before:z-20 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
//                 "checked:bg-light_primary checked:before:bg-light_primary",
//               )}
//             />
//             {/* Icon displayed when bank is selected */}
//             {index === checkedIndex && <Icons type="checkedicon" className="absolute top-[13px] right-[13px] h-3.5 w-3.5" />}
//           </div>
//         </div>
//         {/* Bank logo */}
//         <Image src={`/images/${option.logo}`} className="max-w-[30px] w-full h-[30px]" width={30} height={30} alt="logo" />
//       </div>
//       <div className={`h-0 overflow-hidden duration-500 ${index === checkedIndex ? 'tab:h-[76px]' : ''}`}>
//         <div className="justify-end tab:flex hidden pt-[20px]">
//           {/* Continue button */}
//           <Button className="w-full max-w-[180px] py-[10px] px-4 md:py-[14px] md:px-[18px] text_18_16" varient="primary">Continue</Button>
//         </div>
//       </div>
//     </div>
//   ))}



//   const banks = [
//     { id: 27, name: 'HDFC Bank', logo: 'hdfc.png' },
//     { id: 28, name: 'Punjab National Bank', logo: 'punjabbank.png' },
//     { id: 29, name: 'Bank Of India', logo: 'bankofindiabank.png' },
//     { id: 30, name: 'ICICI Bank', logo: 'icicbank.png' },
//     { id: 31, name: 'Union Bank', logo: 'unionbank.png' },
//   ];



// const { checkedIndex, handleCheck } = useCheckbox();

