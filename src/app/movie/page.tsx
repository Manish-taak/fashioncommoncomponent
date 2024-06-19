"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const PaginationDynamic = () => {
    const params = useSearchParams();
    const [data, setData] = useState([]);
    console.log(data, "dtaa")
    const [currentPagenumber, setCurrentPagenumber] = useState(1);

    const totalData = 100;
    const dataPerpage = 8;

    const totalpages = Math.ceil(totalData / dataPerpage);

    useEffect(() => {
        const page = Number(params.get('page')) || 1;
        if (page >= 1) {
            setCurrentPagenumber(page);
        }
    }, [params]);

    const offSet = (currentPagenumber - 1) * dataPerpage;

    useEffect(() => {
        // const URL = `https://jsonplaceholder.typicode.com/posts?_start=${offSet}&_limit=${dataPerpage}`;
        const URL = `https://jsonplaceholder.typicode.com/comments?_start=${offSet}&_limit=${dataPerpage}`;


        const fetchData = async () => {
            try {
                const res = await fetch(URL);
                const result = await res.json(); // Assuming the API returns JSON data
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [offSet]);

    const pagenumber = [];

    for (let i = currentPagenumber - 3; i <= currentPagenumber + 3; i++) {
        if (i < 1) continue;
        if (i > totalpages) break;
        pagenumber.push(i);
    }

    return (
        <>
            <div>
                {
                    data?.map((item: any) => {
                        return (<>
                            <h1>{item?.name}</h1>
                            <h1>{item?.email}</h1>
                            <h1>{item?.body}</h1>
                        </>)
                    })
                }
                <h1>card</h1>

                <div className='items-center flex justify-center ' >
                    <div className='flex flex-row gap-2 ' >
                        {
                            currentPagenumber - 1 >= 1 && (
                                <>
                                    <Link href="/movie" >{"<<"}</Link>
                                </>
                            )
                        }

                        {
                            pagenumber?.map((page) => <Link key={page} href={`/movie?page=${page}`} >{page}</Link>)
                        }

                        {
                            currentPagenumber + 1 <= totalpages && (
                                <>
                                    <Link href="/movie" >{">>"}</Link>
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};


export default PaginationDynamic