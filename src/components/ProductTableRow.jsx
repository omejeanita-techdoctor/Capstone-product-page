import React, { useState } from "react";

import { FaAddressBook, FaAngellist, FaAngleDown, FaAngleUp, FaArrowUp } from "react-icons/fa";
import { FaAnglesDown, FaArrowDown } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const ProductTableRow = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <tr className="border-b hover:bg-gray-100">
        <td className="px-4 py-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-[55px] h-[58px] rounded-[8px] object-cover"
          />
        </td>
        <td className="px-4 py-2">{product.name}</td>
        <td className="px-4 py-2">{product.batchNo}</td>
        <td className="px-4 py-2">{product.quantity}</td>
        <td className="px-4 py-2">{product.price}</td>

        <td className="px-4 py-2">
          {product.status === "In Stock" ? (
            <span className="text-white  p-2 flex justify-center items-center rounded-lg bg-[#02B857]">
              {product.status}
            </span>
          ) : (
            <span className="text-white  p-2 flex justify-center items-center rounded-lg bg-[#E60101]">
              {product.status}
            </span>
          )}
        </td>

        <td className="px-4 py-2">
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleAccordion}
          >
            {isOpen ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </td>
      </tr>
      {isOpen && (
        <tr className="bg-[#E1E4FF] ">
          <td colSpan="7">
            {/* Product details content here */}
            <div className="pt-6 pb-8 flex gap-8 pr-4 pl-[51px] py-2">
              <div className="flex flex-col gap-2">
                <p className=" rounded-md w-fit text-transparent p-1 font-normal text-[#2A2A2C]">
                  {product.date}
                </p>
                <div className="w-[151px] h-[133px] flex align-self-end  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-[8px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="bg-[#F5F6FF] rounded-md w-fit text-[12px] p-1 font-normal text-[#2A2A2C]">
                  {product.date}
                </p>
                <div className="bg-[#F5F6FF] rounded-md w-fit py-4 px-6">
                  <p className="text-normal text-[12px] text-[#9C9C9C]">
                    Name:{" "}
                    <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                      {product.name}
                    </span>
                  </p>
                  <p className="text-normal text-[12px] text-[#9C9C9C]">
                    Batch No:{" "}
                    <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                      {product.batchNo}
                    </span>
                  </p>
                  <p className="text-normal text-[12px] text-[#9C9C9C]">
                    Selling Price:{" "}
                    <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                      {product.price}
                    </span>
                  </p>
                  <p className="text-normal text-[12px] text-[#9C9C9C]">
                    Cost Price:{" "}
                    <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                      {product.cost}
                    </span>
                  </p>
                  <p className="text-normal text-[12px] text-[#9C9C9C]">
                    Status:{" "}
                    {product.status === "In Stock" ? (
                      <span className="text-[#02B857] pl-3 text-[14px] font-normal">
                        {product.status}
                      </span>
                    ) : (
                      <span className="text-[#E60101] pl-3 text-[14px] font-normal">
                        {product.status}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className=" ml-auto w-fit cursor-pointer">
                  <p className="bg-[#F5F6FF] rounded-md w-fit flex text-[12px] p-1 font-normal text-[#2A2A2C]">
                    Edit <MdEdit className="pl-2 text-[18px]" />
                  </p>
                </div>
                <div className="flex bg-[#F5F6FF] rounded-md w-fit ">
                  <div className="py-4 pl-6">
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Stock:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.stock}
                      </span>
                    </p>
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Quantity:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.quantity}
                      </span>
                    </p>
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Customer:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.customer}
                      </span>
                    </p>

                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Sold:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.sold}
                      </span>
                    </p>
                  </div>
                  <div className="py-4 px-4">
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Stock:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.stock}
                      </span>
                    </p>
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Quantity:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.quantity}
                      </span>
                    </p>
                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      color:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.color}
                      </span>
                    </p>

                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Sold:{" "}
                      <span className="text-[#2A2A2C] pl-3 text-[14px] font-normal">
                        {product.sold}
                      </span>
                    </p>

                    <p className="text-normal text-[12px] text-[#9C9C9C]">
                      Platform:{" "}
                      {product.platform === "Online" ? (
                        <span className="text-[#02B857] pl-3 text-[14px] font-normal">
                          {product.platform}
                        </span>
                      ) : (
                        <span className="text-[#E60101] pl-3 text-[14px] font-normal">
                          {product.platform}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ProductTableRow;
