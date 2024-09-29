import React from 'react'
import { Image, Video, Transformation } from 'cloudinary-react';

export const Firstpart = () => {
    return (
        <div>
            <div className='py-16 bg-white ' >
                <h1 className='text-3xl font-bold text-center mb-0'>Browse The Range</h1>
                <p className='text-[14px]  text-center p-4 mt-0' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 items-center justify-center'>
                <div >
                <Image className='w-[300px] h-50 object-cover rounded-lg' cloudName="dfo4alc3w" publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137830/Mask_Group_2_af9jbf.png">
                    <Transformation crop="scale" width="200" angle="10" />
                </Image>
                <h3 className='text-xl font-semibold mb-2'>Dining</h3>
                </div>
                <div>
                <Image  className='w-[300px] h-50 object-cover rounded-lg' cloudName="dfo4alc3w" publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137830/Image-living_room_z42uqw.png">
                    <Transformation crop="scale" width="200" angle="10" />
                </Image>
                <h3 className='text-xl font-semibold mb-2 items-center justify-center'>Living</h3>
                </div>
                <div>
                <Image className='w-[300px] h-50 object-cover rounded-lg' cloudName="dfo4alc3w" publicId="https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137830/Mask_Group_3_wdafc3.png">
                    <Transformation crop="scale" width="200" angle="10" />
                </Image>
                <h3 className='text-xl font-semibold mb-2'>Bedroom</h3>
            </div>
            </div>

        </div>
    )
}
export default Firstpart;