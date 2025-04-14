export default function StayCard({ stay }) {
  return (
    <li className="flex flex-col rounded-lg">
      <figure className="w-full h-60">
        <img
          src={stay.photo}
          alt={stay.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="flex justify-between items-center w-full text-gray-400 p-2">
        <div>
          <p>
            {stay.superHost && (
              <span className="border border-gray-950 rounded-2xl px-2.5 py-1 text-xs font-bold text-gray-700 mr-2">
                SUPERHOST
              </span>
            )}
            <span className="text-sm">
              {stay.type}
              {stay.beds && ` · ${stay.beds} beds`}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <img className="w-5 h-5" src="star.svg" alt="Rating" />
          <span className="text-sm">{stay.rating}</span>
        </div>
      </div>
      <h2 className="font-bold text-gray-700 p-2">{stay.title}</h2>
    </li>
  );
}