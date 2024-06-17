import React, { useState } from 'react'

const ProductsFilter = () => {


    const [items, setItems] = useState<string[]>([]);
    const removeItem = (index: number) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };
    return (
        <>
            <div className=" h-0 overflow-hidden duration-500  dsdsadsad flex flex-col gap-[8px]">
                <div className="pr-[4px]">
                    {/* Grid layout for gender checkboxes */}
                    <div className="grid grid-cols-1 gap-y-[8.5px]">
                        {/* {filterside?.gender?.map((item, index) => {
                            return (
                                <div key={Date.now() + index}>
                                    <CheckboxFilter
                                        labelclass="gap-[10px]"
                                        color={`green`}
                                        value={item?.gender}
                                        id={item?.gender}
                                        setItems={setItems}
                                        items={items}
                                    />
                                </div>
                            );
                        })} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsFilter