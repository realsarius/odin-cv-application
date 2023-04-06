/* eslint-disable jsx-a11y/label-has-associated-control */
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const EducationInputAdd = ({
  addEducationState,
  setAddEducationState,
  educationHandler,
}) => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const schoolChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(event.target.value);
  };

  const degreeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(event.target.value);
  };

  const cityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const countryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const education = {
      id: uuidv4(),
      school,
      degree,
      city,
      country,
    };
    educationHandler(education);
    setAddEducationState(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${!addEducationState ? 'hidden' : ''} flex flex-col gap-4`}
    >
      <div className="input-class flex flex-col">
        <label
          htmlFor="school"
          className="mb-2 ml-2 antialiased text-md font-semibold"
        >
          School
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          onChange={schoolChangeHandler}
          id="school"
          className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          placeholder="Enter school / university"
        />
      </div>
      <div className="input-class flex flex-col">
        <label
          htmlFor="degree"
          className="mb-2 ml-2 antialiased text-md font-semibold"
        >
          Degree
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          onChange={degreeChangeHandler}
          id="degree"
          className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          placeholder="Enter degree / Field of Study / Exchange Semester"
        />
      </div>

      <div className="input-class flex flex-col lg:flex-row w-full justify-between lg:gap-4">
        <div className="input-class flex flex-col w-full lg:w-6/12">
          <label
            htmlFor="city"
            className="ml-2 antialiased text-sm font-semibold"
          >
            City
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>
          <input
            id="city"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
            placeholder="Enter City"
            onChange={cityChangeHandler}
          />
        </div>
        <div className="input-class flex flex-col w-full lg:w-6/12">
          <label
            htmlFor="country"
            className="ml-2 antialiased text-sm font-semibold"
          >
            Country
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>
          <input
            id="country"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
            placeholder="Enter Country"
            onChange={countryChangeHandler}
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
