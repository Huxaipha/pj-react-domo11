import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Furniture = () => {
  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center mb-12">
        {/* Header text */}
        <h2 className="text-[14px] text-black mb-4">Share your setup with</h2>
        <h3 className="text-3xl font-bold text-black">#FuniroFurniture</h3>
      </div>

      {/* Image Grid (Masonry Layout) */}
      <div className="container mx-auto  grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {/* First Column */}
        <div className="space-y-4">
          <Image
            className="w-[247px] h-[382px] object-cover rounded-lg"
            cloudName="dfo4alc3w"
            publicId="Rectangle_36_usyhqf"
            alt="Furniture Image 1"
          >
            <Transformation crop="scale" width="200" />
          </Image>
          <Image
            className="w-[247px] h-[382px] object-cover rounded-lg mb-4"
            cloudName="dfo4alc3w"
            publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_37_zhdta0.png"
            alt="Furniture Image 1"
          >
            <Transformation crop="scale" width="200" />
          </Image>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <Image
            className="w-full h-[323px] object-cover rounded-lg mb-10"
            cloudName="dfo4alc3w"
            publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_38_ji60io.png"
            alt="Furniture Image 2"
          >
            <Transformation crop="scale" width="200" />
          </Image>
          <Image
            className="w-full h-60 object-cover rounded-lg"
            cloudName="dfo4alc3w"
            publicId="Rectangle_39_v3argl"
            alt="Furniture Image 4"
          >
            <Transformation crop="scale" width="200" />
          </Image>
        </div>

        {/* Third Column */}
        <div className="space-y-4">
          <Image
            className="w-full h-60 object-cover rounded-lg"
            cloudName="dfo4alc3w"
            publicId="Rectangle_40_klcdwi"
            alt="Furniture Image 5"
          >
            <Transformation crop="scale" width="200" />
          </Image>
          <Image
            className="w-[170px] h-[242px] object-cover rounded- flex justify-end items-end"
            cloudName="dfo4alc3w"
            publicId="Rectangle_41_vabmac"
            alt="Furniture Image 6"
          >
            <Transformation crop="scale" width="200" />
          </Image>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col space-y-4">
          <Image
            className="w-[290px] h-[348px] object-cover rounded-lg"
            cloudName="dfo4alc3w"
            publicId="Rectangle_43_sdccko"
            alt="Furniture Image 7"
          >
            <Transformation crop="scale" width="200" />
          </Image>
          <Image
            className="w-[258px] h-[196px] object-cover rounded-lg"
            cloudName="dfo4alc3w"
            publicId="Rectangle_44_bcv2go"
            alt="Furniture Image 8"
          >
            <Transformation crop="scale" width="200" />
          </Image>
          <Image
              className="w-[425px] h-[433px] object-cover rounded-lg"
              cloudName="dfo4alc3w"
              publicId="Rectangle_45_dya2q9"
              alt="Furniture Image 9"
            >
              <Transformation crop="scale" width="200" />
            </Image>
          
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;


// import React from 'react';
// import { Image, Transformation } from 'cloudinary-react';

// const Furniture = () => {
//   return (
//     <div className="text-white py-16">
//       <div className="container mx-auto text-center mb-12">
//         {/* Header text */}
//         <h2 className="text-[14px] text-black mb-4">Share your setup with</h2>
//         <h3 className="text-3xl font-bold text-black">#FuniroFurniture</h3>
//       </div>

//       {/* Custom Image Layout */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* First Column (Left-aligned) */}
//           <div className="flex flex-col space-y-4">
//             <Image
//               className="w-[200px] h-[350px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_36_usyhqf.png"
//               alt="Furniture Image 1"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//             <Image
//               className="w-[400px] h-[300px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_38_ji60io.png"
//               alt="Furniture Image 2"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//           </div>

//           {/* Second Column (Under First) */}
//           <div className="flex flex-col space-y-4">
//             <Image
//               className="w-[350px] h-[300px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_37_zhdta0.png"
//               alt="Furniture Image 3"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//             <Image
//               className="w-[300px] h-[230px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Rectangle_39_v3argl.png"
//               alt="Furniture Image 4"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//           </div>

//           {/* Third Column (Center-aligned) */}
//           <div className="flex flex-col space-y-4 items-center">
//             <Image
//               className="w-[260px] h-[280px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137814/Rectangle_40_klcdwi.png"
//               alt="Furniture Image 5"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//           </div>

//           {/* Fourth Column (Right-aligned) */}
//           <div className="flex flex-col space-y-4">
//             <Image
//               className="w-[260px] h-[320px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_43_sdccko.png"
//               alt="Furniture Image 6"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>
//             <Image
//               className="w-[260px] h-[320px] object-cover rounded-lg"
//               cloudName="dfo4alc3w"
//               publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137813/Rectangle_45_1_grfjfe.png"
//               alt="Furniture Image 7"
//             >
//               <Transformation crop="scale" width="200" />
//             </Image>

//             {/* Row for the last two images in the fourth column */}
//             <div className="flex space-x-4">
//               <Image
//                 className="w-[150px] h-[220px] object-cover rounded-lg"
//                 cloudName="dfo4alc3w"
//                 publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Rectangle_41_vabmac.png"
//                 alt="Furniture Image 8"
//               >
//                 <Transformation crop="scale" width="200" />
//               </Image>
//               <Image
//                 className="w-[230px] h-[180px] object-cover rounded-lg"
//                 cloudName="dfo4alc3w"
//                 publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137811/Rectangle_44_bcv2go.png"
//                 alt="Furniture Image 9"
//               >
//                 <Transformation crop="scale" width="200" />
//               </Image>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Furniture;






