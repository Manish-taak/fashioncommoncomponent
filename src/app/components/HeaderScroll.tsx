
// // Scroll Effect / Header
// const [isScrolledDown, setIsScrolledDown] = useState(false); // State to track scroll direction

// import { cn } from "@/utils/cn";

// useEffect(() => {
//     let lastScrollTop = 0;

//     /**
//      * Handles scroll events to determine if the user is scrolling up or down.
//      */
//     const handleScroll = () => {
//         const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position
//         if (currentScrollTop > lastScrollTop) {
//             setIsScrolledDown(true); // Downscroll
//         } else {
//             setIsScrolledDown(false); // Upscroll
//         }

//         lastScrollTop = currentScrollTop; // Update last scroll position
//     };

//     window.addEventListener('scroll', handleScroll); // Add scroll event listener

//     return () => {
//         window.removeEventListener('scroll', handleScroll); // Cleanup: Remove scroll event listener
//     };
// }, []); // Empty dependency array ensures this effect runs only once on mount



// use this 
{/* <header
    className={cn`fixed shadow-md top-0 left-0 w-full pt-[20px] md:pt-[30px] pb-[20px] bg-white border-b border-gray-200 transition-transform duration-300 z-50 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'
        }`}
></header> */}