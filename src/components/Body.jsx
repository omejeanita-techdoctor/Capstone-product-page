import Header from "./Header";
import ProductTable from "./ProductTable";

function Body() {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-nowrap">
        <Header />
        <ProductTable />
      </div>
    </>
  );
}

export default Body;
