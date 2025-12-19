import { useNavigate } from "react-router-dom";

const IpoCard = ({ ipo }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-3">{ipo.name}</h2>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          Date: <span className="font-medium">{ipo.date}</span>
        </p>
        <p>
          Lots: <span className="font-medium">{ipo.lots}</span>
        </p>
      </div>

      <button
        onClick={() => navigate(`/ipo/${ipo.id}`)}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm"
      >
        View Details
      </button>
    </div>
  );
};

export default IpoCard;
