import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import Card from "./Card.jsx";

const DataView = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                console.log('Fetching data from API');
                const res = await fetch('http://demo3287291.mockable.io/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setIsLoading(false);
                    setUsers(data);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        getUsers();
    }, []);
    return (
        <>
            <div className="text-center font-bold text-2xl bg-yellow-200 text-black-300 pt-3 pb-3">
                <h1 className="pb-5">Registered Users</h1>
                {isLoading && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
                        <ReactLoading type="spin" color="#000000" height={50} width={50} />
                    </div>
                )}
                {!isLoading && users.length === 0 && <p>No users found</p>}
                {!isLoading && users.length > 0 && <p>Found {users.length} users</p> && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10 pr-10">
                    {users.map((user) => (
                        <Card key={user.id} user={user}/>
                    ))}
                </div>}

            </div>
            <Card />
        </>
    )
}
export default DataView
