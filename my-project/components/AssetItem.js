const AssetItem = ({ imageSrc, name, availability }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 border border-[#B7BECC] rounded-xl">
      <img
        src={imageSrc}
        alt={name}
        className="w-11 h-11 object-contain object-center"
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <h4 className="text-xl font-medium">{name}</h4>
        <button
          className={`p-2 rounded-lg capitalize text-xs text-white ${
            availability ? "bg-[#6FD791]" : "bg-[#BC3131]"
          }`}
        >
          {availability ? "available" : "unavailable"}
        </button>
      </div>
    </div>
  );
};

export default AssetItem;
