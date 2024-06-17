"use client"
import { useUser } from '../contexts/UserContext';

const UserProfile = () => {
    const { user } = useUser();


    return (
        <div className="p-4 rounded-lg shadow-md">
            {user ? (
                <div>
                    <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
                    {/* <p >Email: {user.email}</p> */}
                </div>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold">Please log in.</h1>
                    <button
                        className="mt-4 px-4 py-2 border  rounded-lg"
                    >
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
