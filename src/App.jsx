import Header from "./components/Header";
import Body from "./components/Body";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <div className="flex w-full">
        <SideNav />
        <Body />
      </div>

       
        <div  className=" flex border-opacity-40 my-28 p-px mx-auto ">
        <div className=" min-w-max text-[#9C9C9C]"><bold>Sold Product</bold></div>
        <SideNav />
        <Body />
      </div>

        <div  className=" flex border-opacity-40 my-28 p-px ">
        <div className=" min-w-max text-[#9C9C9C]"><bold>In Stock Products</bold></div>
        <SideNav />
        <Body />
      </div>

        <div  className=" flex w-full border-opacity-40 my-28 p-px mx-auto">
        <div className=" min-w-max text-[#9C9C9C]"><bold>Out Stock Products</bold></div>
        <SideNav />
        <Body />
      </div>
    </>
  );
}

export default App;
