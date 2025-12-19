import { ipoData } from "../data/ipoData";
import { Link } from "react-router-dom";

const IpoList = () => {
  return (
    <div className="min-h-screen bg-white font-sora">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <Link to="/">
          <h1 className="text-xl font-semibold mb-6">IPO List</h1>
        </Link>
        <div className="border">
          <div className="hidden md:grid grid-cols-12 text-sm text-gray-500 p-4 bg-gray-100">
            <div className="col-span-4">Company / Issue date</div>
            <div className="col-span-3 text-center">Issue size</div>
            <div className="col-span-2 text-center">Price range</div>
            <div className="col-span-3 text-right">Min invest/qty</div>
          </div>

          <div className="divide-y">
            {ipoData.map((ipo) => (
              <Link
                to={`/ipo/${ipo.id}`}
                key={ipo.id}
                className="block hover:bg-gray-50"
              >
                <div
                  key={ipo.id}
                  className="p-4 md:grid md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <img
                      src={ipo.logo}
                      alt={ipo.company}
                      className="w-10 h-10 rounded-full border"
                    />
                    <div>
                      <p className="font-semibold">{ipo.company}</p>
                      <p className="text-sm text-gray-500">{ipo.date}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:col-span-3 md:text-center mt-3 md:mt-0 font-semibold">
                    {ipo.issueSize}
                  </div>

                  <div className="hidden md:block md:col-span-2 md:text-center mt-3 md:mt-0 font-semibold">
                    {ipo.priceRange}
                  </div>

                  <div className="md:col-span-3 md:text-right mt-3 md:mt-0">
                    <p className="font-semibold">{ipo.minInvestment}</p>
                    <p className="text-sm text-gray-500">{ipo.quantity}</p>
                  </div>

                  <div className="md:hidden mt-3 grid grid-cols-2 gap-3 text-sm text-gray-600">
                    <div>
                      <p className="text-xs">Issue Size</p>
                      <p className="font-medium">{ipo.issueSize}</p>
                    </div>
                    <div>
                      <p className="text-xs">Price Range</p>
                      <p className="font-medium">{ipo.priceRange}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpoList;
