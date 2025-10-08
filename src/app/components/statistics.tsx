const Statistics = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 items-center text-center border border-[#15008B] h-full p-4 lg:p-6 xl:p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="bg-border p-1.5 lg:p-2">
          <div className="bg-[#244EA3] p-1.5 lg:p-2 xl:p-3">
            <p className="text-white text-3xl xl:text-4xl min-[90rem]:text-5xl font-semibold">
              200+
            </p>
          </div>
        </div>
        <p className="text-xl xl:text-2xl min-[90rem]:text-3xl font-medium">
          Speakers
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 items-center text-center border border-[#15008B] h-full p-4 lg:p-6 xl:p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="bg-border p-1.5 lg:p-2">
          <div className="bg-[#244EA3] p-1.5 lg:p-2 xl:p-3">
            <p className="text-white text-3xl xl:text-4xl min-[90rem]:text-5xl font-semibold">
              10,000+
            </p>
          </div>
        </div>
        <p className="text-xl xl:text-2xl min-[90rem]:text-3xl font-medium">
          Attendees
        </p>
      </div>
      <p className="text-lg xl:text-xl capitalize">(In-Person & Virtual)</p>
    </div>
    <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 items-center text-center border border-[#15008B] h-full p-4 lg:p-6 xl:p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="bg-border p-1.5 lg:p-2">
          <div className="bg-[#244EA3] p-1.5 lg:p-2 xl:p-3">
            <p className="text-white text-3xl xl:text-4xl min-[90rem]:text-5xl font-semibold">
              100+
            </p>
          </div>
        </div>
        <p className="text-xl xl:text-2xl min-[90rem]:text-3xl font-medium">
          Exhibitors
        </p>
      </div>
    </div>
  </div>
);

export default Statistics;
