import React from "react";
import ProductTableRow from "./ProductTableRow";
import products from "../assets/data/products";

const ProductTable = () => {
  return (
    <div className="py-[37px] pl-[77px] pr-[30px] bg-[#FAFAFF] table-container w-full">
      <div className="bg-[#E1E4FF] text-black mt-[27px] mb-[34px] flex w-fit">
        <span className="hover:bg-[#0315BD] active:bg-[#0315BD] focus:outline-none focus:ring focus:ring-[#E1E4FF]  border-r-[0.5px] border-b-[0.5px] border-[#9C9C9C] rounded-t-[8px] p-4 flex justify-center items-center w-[172px]">
          All Products (200)
        </span>
        <span className="hover:bg-[#0315BD] active:bg-[#0315BD] focus:outline-none focus:ring focus:ring-[#E1E4FF] border-r-[0.5px] cursor-pointer border-b-[0.5px] border-[#9C9C9C] rounded-t-[8px] p-4 flex  justify-center items-center w-[172px]">
          Sold Products (200)
        </span>
        <span className="hover:bg-[#0315BD] active:bg-[#0315BD] focus:outline-none focus:ring focus:ring-[#E1E4FF] border-r-[0.5px] cursor-pointer border-b-[0.5px] border-[#9C9C9C] rounded-t-[8px] p-4  flex justify-center items-center w-[172px]">
          In Stock (200)
        </span>
        <span className="hover:bg-[#0315BD] active:bg-[#0315BD] focus:outline-none focus:ring focus:ring-[#E1E4FF] border-r-[0.5px] cursor-pointer border-b-[0.5px] border-[#9C9C9C] rounded-t-[8px] p-4   flex justify-center items-center w-[172px]">
          Out of Stock (200)
        </span>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Batch No</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
