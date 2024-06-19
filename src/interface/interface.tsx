import { ReactNode } from "react";

export interface counterprops {
    start: number;
    end: number;
    duration: number;
    text: string;
    description: string;
    numbertext?: string
};



export interface nextbreadcrumbprops {
    children?: ReactNode;
    bgcolor?: string;
    className?: string;
}


export interface breadcrumb {
    href: string;
    label: string;
}



export type buttonvariant =
    | "secondary"
    | "gray"
    | "primary"
    | "liquid"
    | "thirdly";

export interface ButtonProps {
    children: ReactNode;
    varient?: buttonvariant;
    className?: string;
    onClick?: () => void;
    icon?: boolean
    btntype?: "button" | "submit" | "reset";
    navroute?: string
    btnclass?: string

}


export interface OverlayProps {
    isOpen: boolean;
    onClose?: () => void;
}



export interface sortbydropdowntype {
    heading: string;
    children: React.ReactNode;
    className?: string;
    arrowImageClass?: string;
    width?: string;
}


export interface dropdownprops {
    testclass?: string;
    heading: string;
    children: ReactNode;
    image?: string;
    className?: string;
    directionshovercontent?: string;
    arrow?: string;
    allcateDropdown?: any;
    onclick?: boolean;
    arrowimageclass?: string;
    positionsta?: boolean;
  }
  


  
export interface option {
    id: number;
    name: string;
    logo?: string;
  }

  export interface inputselect {
    label?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    options: option[];
    error?: string;
  }

  export interface icontype{
    className?:string,
    type?:string
  }

  export interface tooltip{
    children?:ReactNode,
    text?:string
  }