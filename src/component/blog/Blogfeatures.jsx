import React, { useState } from 'react';
import Computer from '../../assets/image/computer.png'; // Ensure the path is correct
import handdrawing from '../../assets/image/handdrawing.png'; // Ensure the path is correct
import handwriting from '../../assets/image/handwriting.png'; // Ensure the path is correct
import userIcon from '../../assets/image/userIcon.svg'; // Adjust path as needed
import bagtab from '../../assets/image/bagtab.svg'; // Adjust path as needed
import ci_tag from '../../assets/image/ci_tag.svg'; // Adjust path as needed


const Blogfeatures = () => {
    const blogData = [
        {
            image: Computer,
            date: '14 Oct 2022',
            tag: 'Wood',
            subtitle: 'Going all-in with millennial design',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        },
        {
            image: handdrawing,
            date: '14 Oct 2022',
            tag: 'Wood',
            subtitle: 'Exploring new ways of decorating',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        },
        {
            image: handwriting,
            date: '14 Oct 2022',
            tag: 'Wood',
            subtitle: 'Handmade pieces that took time to make',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2; // Set how many posts you want per page

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    const pageCount = Math.ceil(blogData.length / postsPerPage); // Calculate total pages

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex">
            <div className="w-3/3 space-y-10 p-8"> {/* This is the left column */}
                {currentPosts.map((blog, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={blog.image}
                                alt="Blog post"
                                className="w-full h-auto rounded-t-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-2 px-4 flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <span className="flex items-center space-x-1">
                                        <img src={userIcon} alt="User Icon" className="h-5 w-5" />
                                        <p className="text-sm">Admin</p>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <img src={bagtab} alt="bagtab" className="h-5 w-5" />
                                        <p className="text-sm">{blog.date}</p>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <img src={ci_tag} alt="ci_tag" className="h-5 w-5" />
                                        <p className="text-sm">{blog.tag}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-xl font-semibold text-start mb-2">{blog.subtitle}</p>
                            <p className="text-gray-600 text-sm text-start leading-relaxed">{blog.text}</p>
                            <button className="underline flex items-start justify-start hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}

                {/* Pagination Controls */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevious}
                        className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'bg-yellow-600 text-white'}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: pageCount }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-300'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        className={`px-4 py-2 mx-1 ${currentPage === pageCount ? 'bg-gray-300' : 'bg-yellow-600 text-white'}`}
                        disabled={currentPage === pageCount}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogfeatures




{/* <div className="space-y-10 p-8">
            {blogData.map((blog, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={blog.image}
                            alt="Blog post"
                            className="w-full h-auto rounded-t-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-2 px-4 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center space-x-1">
                                    <img src={userIcon} alt="User Icon" className="h-5 w-5" /> {/* SVG as image */}
            //                         <p className="text-sm">Admin</p>
            //                     </span>
            //                     <span className="flex items-center space-x-1">
            //                         <img src={bagtab} alt="bagtab" className="h-5 w-5" />
            //                         <p className="text-sm">{blog.date}</p>
            //                     </span>
            //                     <span className="flex items-center space-x-1">
            //                         <img src={ci_tag} alt="ci_tag" className="h-5 w-5" />
            //                         <p className="text-sm">{blog.tag}</p>
            //                     </span>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="p-6">
            //             <p className="text-xl font-semibold text-start mb-2">{blog.subtitle}</p>
            //             <p className="text-gray-600 text-sm text-start leading-relaxed">{blog.text}</p>
            //             <button className=" underline flex items-start justify-start hover:bg-gray-500 hover:underline text-black font-bold py-2 px-4">
            //                 Read More
            //             </button>

            //             {/* <p className="text-gray-600 text-base leading-relaxed">{blog.text}</p> */}

            //         </div>
            //     </div>
            // ))}  */}