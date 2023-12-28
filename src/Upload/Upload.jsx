const Upload = () => {
    return (
        <>
            <div className="container mx-auto text-center">
                    <h1 className="text-2xl font-semibold mb-4 mt-10">Upload Excel File</h1>
                    <form action="http://localhost:3000/user/dataexcel" method="post" encType="multipart/form-data">
                        <div className="mb-4 mt-10">
                            <label htmlFor="file" className="block text-sm font-medium text-gray-600 mt-7">Choose an Excel file (.xlsx)</label>
                            <input type="file" id="file" name="excelFile" accept=".xlsx" className="mt-2 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
            </div>
        </>
    );
};

export default Upload;
