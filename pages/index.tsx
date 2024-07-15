const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <div className="items-center text-center font-bold text-[52px]">The Fit for you</div>
      <div className="text-center text-[22px]"><span className="font-bold">Reality Fit I</span> $1,000</div>
      <div className="flex justify-center items-center py-[3rem]">
        <button className="bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-black hover:text-white">
          Pre-Order
        </button>
      </div>
    </div>
  );
};

export default Index;
