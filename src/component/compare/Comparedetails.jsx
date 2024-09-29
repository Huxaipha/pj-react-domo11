import React from "react"; 

const Comparedetails = () => {
  // Sample product data for comparison
  const products = [
    {
      id: 1,
      name: "1 Sectional Sofa",
      modelNumber: "TFCBLGRBL6SRHS",
      material: "Solid Wood",
      configuration: "L-shaped",
      upholstery: "Fabric + Cotton",
      upholsteryColor: "Bright Grey & Lion",
      filling: "Foam",
      finish: "Bright Grey & Lion",
      adjustableHeadrest: "No",
      maxLoad: "280 KG",
      origin: "India",
      dimensions: {
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },
      warranty: {
        summary: "1 Year Manufacturing Warranty",
        service: "Warranty Against Manufacturing Defect",
        covered: "Manufacturing Defect",
        notCovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domesticWarranty: "1 Year",
      },
    },
    {
      id: 2,
      name: "1 Three Seater, 2 Single Seater",
      modelNumber: "DTUBLIGRBL568",
      material: "Solid Wood",
      configuration: "L-shaped",
      upholstery: "Fabric + Cotton",
      upholsteryColor: "Bright Grey & Lion",
      filling: "Matte",
      finish: "Bright Grey & Lion",
      adjustableHeadrest: "Yes",
      maxLoad: "300 KG",
      origin: "India",
      dimensions: {
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "65 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
      },
      warranty: {
        summary: "1.2 Year Manufacturing Warranty",
        service: "Warranty of the product is limited to manufacturing defects only.",
        covered: "Manufacturing Defect",
        notCovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domesticWarranty: "3 Months",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10"> {/* Changed to bg-white */}
      <div className="container mx-auto">
        {/* Heading */}
        {/* <h1 className="text-3xl font-bold mb-8 text-left">Compare Products</h1> Changed to text-left */}

        {/* Grid for Comparison */}
        <div className="grid grid-cols-3 gap-4 text-left"> {/* Ensured text-left for grid */}
          {/* General Info */}
          <div>
            <h2 className="font-bold text-lg mb-4">General</h2>
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          {products.map((product) => (
            <div key={product.id} className="border-l pl-4">
              <h2 className="font-bold text-lg mb-4">{product.name}</h2>
              <p>{product.modelNumber}</p>
              <p>{product.material}</p>
              <p>{product.configuration}</p>
              <p>{product.upholstery}</p>
              <p>{product.upholsteryColor}</p>
            </div>
          ))}

          {/* Product Info */}
          <div>
            <h2 className="font-bold text-lg mb-4">Product</h2>
            <p>Filling Material</p>
            <p>Finish Type</p>
            <p>Adjustable Headrest</p>
            <p>Maximum Load Capacity</p>
            <p>Origin of Manufacture</p>
          </div>
          {products.map((product) => (
            <div key={product.id} className="border-l pl-4">
              <p>{product.filling}</p>
              <p>{product.finish}</p>
              <p>{product.adjustableHeadrest}</p>
              <p>{product.maxLoad}</p>
              <p>{product.origin}</p>
            </div>
          ))}

          {/* Dimensions */}
          <div>
            <h2 className="font-bold text-lg mb-4">Dimensions</h2>
            <p>Width</p>
            <p>Height</p>
            <p>Depth</p>
            <p>Weight</p>
            <p>Seat Height</p>
            <p>Leg Height</p>
          </div>
          {products.map((product) => (
            <div key={product.id} className="border-l pl-4">
              <p>{product.dimensions.width}</p>
              <p>{product.dimensions.height}</p>
              <p>{product.dimensions.depth}</p>
              <p>{product.dimensions.weight}</p>
              <p>{product.dimensions.seatHeight}</p>
              <p>{product.dimensions.legHeight}</p>
            </div>
          ))}

          {/* Warranty */}
          <div>
            <h2 className="font-bold text-lg mb-4">Warranty</h2>
            <p>Warranty Summary</p>
            <p>Warranty Service Type</p>
            <p>Covered in Warranty</p>
            <p>Not Covered in Warranty</p>
            <p>Domestic Warranty</p>
          </div>
          {products.map((product) => (
            <div key={product.id} className="border-l pl-4">
              <p>{product.warranty.summary}</p>
              <p>{product.warranty.service}</p>
              <p>{product.warranty.covered}</p>
              <p>{product.warranty.notCovered}</p>
              <p>{product.warranty.domesticWarranty}</p>
            </div>
          ))}
        </div>

        {/* Add To Cart Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-left items-start"> {/* Ensured text-left */}
          {products.map((product) => (
            <button
              key={product.id}
              className="w-[215px] items-start py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Add To Cart
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Ensure the default export is present
export default Comparedetails;
