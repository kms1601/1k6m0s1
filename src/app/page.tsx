import BlogIndex from "@/components/BlogIndex";
import AboutIndex from "@/components/AboutIndex";

const Index = () => {
  return (
    <>
      {/*Desktop*/}
      <div className="mr-10 ml-10 hidden grid-cols-4 grid-rows-2 gap-4 md:grid">
        <div className="col-span-1 md:col-span-3"><BlogIndex/></div>
        <div className="col-span-1"><AboutIndex/></div>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <BlogIndex/>
        <AboutIndex/>
      </div>
    </>
  );
}

export default Index;
