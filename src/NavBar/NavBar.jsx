import ReactLogo from '../assets/react.svg';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">

                <img src={ReactLogo} alt="React Logo" className="w-8 h-8 mr-2"/>

                <div className="flex space-x-4">
                    <a href="#" className="text-white">User Registration</a>
                    <a href="#" className="text-white">User Data View</a>
                    <a href="#" className="text-white">Excel File Download</a>
                    <a href="#" className="text-white">Upload Excel File</a>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
