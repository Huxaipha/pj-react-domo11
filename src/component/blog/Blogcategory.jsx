import React from 'react';
import searchIcon from '../../assets/image/search2.svg'; 
import Rectangle692 from '../../assets/image/Rectangle692.png';
import Rectangle693 from '../../assets/image/Rectangle693.png';
import Rectangle694 from '../../assets/image/Rectangle694.png';
import Rectangle695 from '../../assets/image/Rectangle695.png';
import Rectangle696 from '../../assets/image/Rectangle696.png';

const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 8 },
];

const blogData = [
    { image: Rectangle692, text: 'Going all in with millennial design', date: '03 Aug 2022' },
    { image: Rectangle693, text: 'Exploring new ways of decorating', date: '03 Aug 2022' },
    { image: Rectangle694, text: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
    { image: Rectangle695, text: 'Modern home in Milan', date: '03 Aug 2022' },
    { image: Rectangle696, text: 'Colorful office redesign', date: '03 Aug 2022' },
];

const Blogcategory = () => {
  return (
    <div className="w-full lg:w-1/4 p-4"> 
  <div className="mb-4 flex items-center px-4 py-2 border border-gray-300 rounded-md">
    {/* Input field for search */}
    <input 
      type="text" 
      placeholder="Search" 
      className="w-full p-2 border-none focus:outline-none"
    />

    {/* Search Icon at the end */}
    <img src={searchIcon} alt="Search Icon" className="h-5 w-5 ml-2" />
  </div>





      <h2 className="text-[24px] font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-sm text-gray-700">{category.name}</span>
            <span className="text-sm text-gray-900">{category.count}</span>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-start text-[24px] mt-8">Recent Posts</h2>
      {blogData.map((blog, index) => (
        <div key={index} className="flex items-center mb-8">
          <div className="w-20 h-20">
            <img
              src={blog.image}
              alt={`Blog post ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="ml-4">
            <p className="text-sm text-start text-gray-800 font-semibold">{blog.text}</p>
            <p className="text-sm text-start text-gray-500">{blog.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogcategory;







// import React from 'react';
// import searchIcon from '../../assets/image/search2.svg'; // Ensure this path is correct

// const categories = [
//     { name: 'Crafts', count: 2 },
//     { name: 'Design', count: 8 },
//     { name: 'Handmade', count: 7 },
//     { name: 'Interior', count: 1 },
//     { name: 'Wood', count: 8 },
// ];

// const Blogcategory = () => {
//   return (
//     <div className="w-[393px] h-[537px] lg:w-1/3 p-8 pl-2"> {/* Reduced padding on the left */}
//       {/* Search box with icon and border */}
//       <div className="mb-4 flex items-center px-4 py-2 border border-gray-300">
//         <img src={searchIcon} alt="Search Icon" className="h-5 w-5 ml-2" />
//       </div>
      
//       {/* h2 (Categories) below the search box */}
//       <h2 className="text-[24px] font-semibold mb-4">Categories</h2>

//       {/* Category list */}
//       <div className="space-y-2">
//         {categories.map((category, index) => (
//           <div key={index} className="flex justify-between">
//             <span className="text-sm text-gray-700">{category.name}</span>
//             <span className="text-sm text-gray-900">{category.count}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogcategory;
