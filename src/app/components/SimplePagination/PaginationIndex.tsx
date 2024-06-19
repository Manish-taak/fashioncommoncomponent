"use client"




// simple pagination but working




import { useState, useEffect } from 'react';
import Pagination from './Pagination';

interface Post {
    id: number;
    title: string;
    body: string;
}

const itemsPerPage = 10;

const PaginationIndex: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentItems, setCurrentItems] = useState<Post[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch posts from the fake API
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data: Post[] = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        // Calculate the current items to be displayed
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, posts]);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">Posts List</h1>
            <ul className="list-disc pl-5">
                {currentItems.map((post) => (
                    <li key={post.id} className="mb-2">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
    );
};

export default PaginationIndex;
