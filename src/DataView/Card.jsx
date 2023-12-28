const Card = ({ user, onEdit, onDelete }) => {
    if (!user) {
        return null; // Or handle the case when user is undefined or null
    }

    return (
            <div className="max-w-md bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-40 object-cover object-center rounded-t-lg"
                     src="https://placekitten.com/600/400" alt="Profile"/>

                <div className="p-6">
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
                        <p className="text-gray-600">{user.aadharNumber}</p>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-gray-800">Pancard</h4>
                        <p className="text-gray-600">{user.pancard}</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;