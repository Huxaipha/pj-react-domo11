import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from '../../assets/image/Rectangle 1.png'; // Adjust this path based on your folder structure
import Blogfeatures from '../blog/Blogfeatures';
import Blogcategory from '../blog/Blogcategory';
import Blogfeat from '../blog/Blogfeat';
import Blogfooter from '../blog/Blogfooter';

const Blog = () => {
  return (
    <>
      <div 
        className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-black mb-2">Blog</h1>

        {/* Breadcrumb Navigation */}
        <div className="text-sm text-black flex space-x-2">
          {/* Use Link to navigate back to Home */}
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <span>{'>'}</span>
          <span className="font-semibold">Blog</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex flex-wrap lg:flex-nowrap p-8">
        <Blogfeatures /> {/* Left side - Blog posts */}
        <Blogcategory /> {/* Right side - Categories */}
      </div>

      <Blogfeat />
      <Blogfooter />
    </>
  );
};

export default Blog;
