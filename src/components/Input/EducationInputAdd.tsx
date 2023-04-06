/* eslint-disable jsx-a11y/label-has-associated-control */

const EducationInputAdd = ({ addEducationState, setAddEducationState }) => {
  const schoolChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    setAddEducationState(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${!addEducationState ? 'hidden' : ''} flex flex-col gap-4`}
    >
      <div className="input-class flex flex-col">
        <label
          htmlFor="schoolName"
          className="mb-2 ml-2 antialiased text-md font-semibold"
        >
          School
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          onChange={schoolChangeHandler}
          id="schoolName"
          className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          placeholder="Enter school / university"
        />
      </div>
      <div className="input-class flex flex-col">
        <label
          htmlFor="schoolName"
          className="mb-2 ml-2 antialiased text-md font-semibold"
        >
          Degree
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          onChange={schoolChangeHandler}
          id="schoolName"
          className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          placeholder="Enter school / university"
        />
      </div>

      <div className="input-class flex flex-col lg:flex-row w-full justify-between lg:gap-4">
        <div className="input-class flex flex-col w-full lg:w-6/12">
          <label
            htmlFor="email"
            className="ml-2 antialiased text-sm font-semibold"
          >
            City
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>
          <input
            id="email"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          />
        </div>
        <div className="input-class flex flex-col w-full lg:w-6/12">
          <label
            htmlFor="phone"
            className="ml-2 antialiased text-sm font-semibold"
          >
            Country
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>
          <input
            id="phone"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-2xl text-white antialiased font-sans font-bold px-10 p-4 bg-gradient-to-r from-[#ED0789] to-[#FC6668] w-full lg:w-fit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EducationInputAdd;
