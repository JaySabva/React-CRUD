import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [user, setUser] = useState({
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

    const [profilePhoto, setprofilePhoto] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData();

            // Append user data to FormData
            for (const key in user) {
                formData.append(key, user[key]);
            }
            formData.append('profilePhoto', profilePhoto);

            const res = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setIsSubmitting(false);
                alert('User registered successfully');
                navigate('/data-view');
            } else {
                setIsSubmitting(false);
                alert('Something went wrong');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error.message);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <form
                id="UserRegForm"
                className="max-w-md mx-auto p-4 bg-white rounded shadow-md mt-6"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 gap-4">
                    <label>Name </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.name}
                        placeholder={"Enter your name"}
                        pattern="^[a-zA-Z ]{2,30}$"
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Email </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.email}
                        placeholder={"Enter your email"}
                        pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Mobile Number </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.mobileNumber}
                        placeholder={"Enter your mobile number"}
                        pattern="^[0-9]{10}$"
                        onChange={(e) => setUser({...user, mobileNumber: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Country </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.country}
                        placeholder={"Enter your country"}
                        pattern="^[a-zA-Z ]{2,30}$"
                        onChange={(e) => setUser({...user, country: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>State </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.state}
                        placeholder={"Enter your state"}
                        pattern="^[a-zA-Z ]{2,30}$"
                        onChange={(e) => setUser({...user, state: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>City </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.city}
                        placeholder={"Enter your city"}
                        onChange={(e) => setUser({...user, city: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Address </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.address}
                        placeholder={"Enter your address"}
                        pattern="^[a-zA-Z0-9 ]{4,250}$"
                        onChange={(e) => setUser({...user, address: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Aadhar Number </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.aadharnumber}
                        placeholder={"Enter your aadhar number"}
                        pattern="^[0-9]{12}$"
                        onChange={(e) => setUser({...user, aadharnumber: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Pancard </label>
                    <input
                        type="text"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.pancard}
                        placeholder={"Enter your pancard"}
                        pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                        onChange={(e) => setUser({...user, pancard: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label>Profile Pic </label>
                    <input
                        type="file"
                        required
                        className="border border-gray-300 p-2 rounded"
                        value={user.profilePhoto}
                        placeholder={"Enter your profile pic"}
                        onChange={(e) => setprofilePhoto(e.target.files[0])}
                    />
                </div>

                {isSubmitting && <button className="bg-green-500 text-white p-2 rounded w-full mt-4">Submitting...</button>}
                {!isSubmitting && <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mt-4 hover:bg-red-600">Submit</button>}
            </form>
        </>
    )
}
export default Form
