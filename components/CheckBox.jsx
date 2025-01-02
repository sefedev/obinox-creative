const CheckBox = ({ name }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-flex items-center justify-center px-4 py-2 font-light text-gray-700 transition-colors duration-200 bg-gray-200 border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-300"
      >
        {name}
      </label>
      <input type="checkbox" className="sr-only" name={name} />
    </>
  );
};

export default CheckBox;
