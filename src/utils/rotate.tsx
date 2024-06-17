
export function rotate(e: any, deg: number) {
    // Get the last child element of the target element
    let currentvalue = e.currentTarget.lastChild;
  
    // Check if the style attribute is not set
    if (!currentvalue.getAttribute("style")) {
      // Set the transform style to rotate by the specified degree
      currentvalue.style.transform = `rotate(${deg}deg)`;
    } else {
      // Remove the style attribute to reset the rotation
      currentvalue.removeAttribute("style");
    }
  }
  
  // ----------------------------------------||-----------------------------------------------
  
  
  /**
   * Rotates the first child element of the target element by the specified degree.
   * @param {any} e - The event object or target element.
   * @param {number} deg - The degree to rotate the element (in degrees).
   */
  export function firstrotate(e: any, deg: number) {
    // Get the first child element of the target element
    let currentvalue = e.currentTarget.firstChild;
  
    // Check if the style attribute is not set
    if (!currentvalue.getAttribute("style")) {
      // Set the transform style to rotate by the specified degree
      currentvalue.style.transform = `rotate(${deg}deg)`;
    } else {
      // Remove the style attribute to reset the rotation
      currentvalue.removeAttribute("style");
    }
  }
  