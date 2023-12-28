import { useState, useEffect } from "react";

const EditForm  = ({user, onCancel, onEdit}) => {
    const [editUser, setEditUser] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        country: '',
        state: '',
        city: '',
        address: '',
        aadharnumber: '',
        pancard: ''
    });

    useEffect(() => {
        setEditUser(user);
    }, [user]);

    const [profilePhoto, setprofilePhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        onEdit(editUser, profilePhoto);
    }
    return (
        <form onSubmit={handleSubmit}>
<div className="grid grid-cols-1 gap-4">
                <label>Name </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.name}
                    onChange={(e) => setEditUser({...editUser, name: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Email </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.email}
                    onChange={(e) => setEditUser({...editUser, email: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Mobile Number </label>
                <input
                    type="text"
                    name="mobileNumber"
                    id="mobileNumber"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.mobileNumber}
                    onChange={(e) => setEditUser({...editUser, mobileNumber: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Country </label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.country}
                    onChange={(e) => setEditUser({...editUser, country: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>State </label>
                <input
                    type="text"
                    name="state"
                    id="state"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.state}
                    onChange={(e) => setEditUser({...editUser, state: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>City </label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    className="block w-full p-2 border rounded
                    border-gray-600"
                    value={editUser.city}
                    onChange={(e) => setEditUser({...editUser, city: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Address </label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.address}
                    onChange={(e) => setEditUser({...editUser, address: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Aadhar Number </label>
                <input
                    type="text"
                    name="aadharnumber"
                    id="aadharnumber"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.aadharnumber}
                    onChange={(e) => setEditUser({...editUser, aadharnumber: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Pancard </label>
                <input
                    type="text"
                    name="pancard"
                    id="pancard"
                    required
                    className="block w-full p-2 border rounded border-gray-600"
                    value={editUser.pancard}
                    onChange={(e) => setEditUser({...editUser, pancard: e.target.value})}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label>Profile Picture </label>
                <input
                    type="file"
                    name="profilePic"
                    id="profilePic"
                    className="block w-full p-2 border rounded border-gray-600"
                    onChange={(e) => setprofilePhoto(e.target.files[0])}
                />
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        type="submit">Submit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={onCancel}>Cancel
                </button>
            </div>
        </form>
    )
}
const Card = ({user}) => {
    const [isEditing, setIsEditing] = useState(false);

    if (!user) {
        return null; // Or handle the case when user is undefined or null
    }

    const onEdit = async (editUser, profilePhoto) => {
        try {
            const formData = new FormData();

            for (const key in editUser) {
                formData.append(key, editUser[key]);
            }

            formData.append('profilePhoto', profilePhoto);

            const res = await fetch(`http://localhost:3000/user/update/${editUser._id}`, {
                method: 'PATCH',
                body: formData,
            });

            if (res.ok) {
                alert('User updated successfully');
                window.location.reload();
            }

        } catch (error) {
            console.error('Error:', error.message);
            alert('An error occurred. Please try again.');
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/user/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                alert('User deleted successfully');
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('An error occurred. Please try again.');
        }
    }
    return (
        <div className="max-w-md bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-60 object-cover object-center rounded-t-lg"
                 src={`http://localhost:3000/${user.profilePic}`} alt="Profile"/>

            <div className="p-6">
                {isEditing && <EditForm  user={user} onCancel={() => setIsEditing(false)} onEdit={onEdit}/>}
                {!isEditing &&
                    <>
                        <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                            <p className="text-gray-600">{user.email}</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Mobile Number</h4>
                            <p className="text-gray-600">{user.mobileNumber}</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                            <p className="text-gray-600">{user.city}, {user.state} , {user.country}</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                            <p className="text-gray-600">{user.address}</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Aadhar Number</h4>
                            <p className="text-gray-600">{user.aadharnumber}</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-800">Pancard</h4>
                            <p className="text-gray-600">{user.pancard}</p>
                        </div>

                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => setIsEditing(true)}>Edit
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={() => handleDelete(user._id)}>Delete
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Card;