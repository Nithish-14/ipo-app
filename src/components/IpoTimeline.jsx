const IpoTimeline = ({ timeline }) => {
  return (
    <div className="w-full">
      <h2 className="font-semibold mb-6">IPO timeline</h2>

      <div className="relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-green-500 hidden md:block" />

        <div className="hidden md:flex flex justify-between items-start">
          {timeline.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="relative z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                ✓
              </div>

              <p className="mt-3 text-sm font-semibold leading-tight">
                {step.label}
              </p>

              <p className="text-xs text-gray-500 mt-1">{step.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-6 space-y-4">
        {timeline.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mt-1">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold">{step.label}</p>
              <p className="text-xs text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IpoTimeline;
