import { useNavigate, useParams } from "react-router-dom";
import { ipoData } from "../data/ipoData";
import IpoTimeline from "../components/IpoTimeLine";

const IpoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipo = ipoData.find((i) => i.id === id);

  console.log("");
  if (!ipo) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-sora p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="border rounded-lg w-10 h-10 flex items-center justify-center"
            >
              ←
            </button>

            <img
              src={ipo.logo}
              alt={ipo.company}
              className="w-10 h-10 rounded-full object-contain"
            />

            <div>
              <h1 className="font-semibold">{ipo.company}</h1>
              <p className="text-sm text-gray-500">{ipo.subTitle}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="border rounded-lg w-10 h-10 flex items-center justify-center">
              ⬇
            </button>
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-xl">
              Apply now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 space-y-4 border-2 border-gray-200">
          <h2 className="font-semibold">IPO details</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border border-gray-200 p-5 rounded-xl">
            <Detail label="Issue size" value={ipo.issueSize} />
            <Detail label="Price range" value={ipo.priceRange} />
            <Detail label="Minimum amount" value={ipo.minimumAmount} />
            <Detail label="Lot size" value={ipo.lotSize} />

            <Detail label="Issue dates" value={ipo.issueDates} />
            <Detail label="Listed on" value={ipo.listedOn} />
            <Detail label="Listed price" value={ipo.listedPrice} />
            <Detail label="Listing gains" value={ipo.listingGains} highlight />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-2 border-gray-200 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <IpoTimeline timeline={ipo.timeline} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-2 border-gray-200 space-y-4">
          <h2 className="font-semibold mb-3">About the company</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{ipo.about}</p>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value, highlight }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className={`font-semibold ${highlight ? "text-green-600" : ""}`}>
      {value}
    </p>
  </div>
);

export default IpoDetails;
