const OfferCard = ({ icon, heading, text }) => {
  return (
    <div className='flex md:flex-row flex-col justify-center md:items-start items-center mx-auto md:m-4 px-4 py-4 max-h-border'>
      <div className='p-color px-2 mb-3'>{icon}</div>
      <div className='cursor-pointer rounded-xl hover:bg-[#6366F1] hover:rounded-xl hover:text-white t p-2 transition-all duration-300'>
        <h2 className='text-2xl font-bold mb-4'>{heading}</h2>
        <p className="text-left break-words leading-6">{text}</p>
      </div>
    </div>
  );
};

export default OfferCard;
