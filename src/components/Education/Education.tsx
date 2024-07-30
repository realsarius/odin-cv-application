import React, { useContext, useState } from 'react';
import graduationSvg from '../../assets/graduation-cap.svg';
import downArrowSvg from '../../assets/down-arrow.svg';
import minusSvg from '../../assets/minus.svg';
import { EducationsContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import { EducationProps } from '../../types';

export default function Education() {
  const { educations, setEducations } = useContext(EducationsContext);

  const [schoolError, setSchoolError] = useState(false);
  const [degreeError, setDegreeError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [showEducation, setShowEducation] = useState(false);

  // Selected UUID for update | Cancel button clears it. | Save button clears it after update(if it's stage for update).
  const [selectedUUID, setSelectedUUID] = useState('');

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Check if a project is selected
    const selectedProjectIndex = educations.findIndex(
      (education) => education.uuid === selectedUUID
    );

    // If a project is selected, update it.
    if (selectedProjectIndex !== -1) {
      const updatedEducations = [...educations];
      updatedEducations[selectedProjectIndex] = {
        ...updatedEducations[selectedProjectIndex],
        school: school || '',
        degree: degree || '',
        city: city || '',
        country: country || '',
      };

      setEducations(updatedEducations);
      setSelectedUUID('');
      setShowEducation(false);

      // Clear Inputs
      setSchool('');
      setDegree('');
      setCity('');
      setCountry('');
    } else {
      // If there's no existing project selected, create one.
      if ((school ?? '').trim().length < 3) {
        setSchoolError(true);
      } else {
        const newEducation = {
          uuid: uuidv4(),
          school: school || '',
          degree: degree || '',
          city: city || '',
          country: country || '',
        };

        const newEducations = [...educations, newEducation];

        setEducations(newEducations);

        setShowEducation(false);
        // Clear Inputs
        setSchool('');
        setDegree('');
        setCity('');
        setCountry('');
      }
    }
  }

  function updateEducationHandler(education: EducationProps) {
    // Change the value of the inputs to the selected project for better user experience
    setSelectedUUID(education.uuid);
    setSchool(education.school);
    setDegree(education.degree);
    setCity(education.city);
    setCountry(education.country);

    // Show the input form
    setShowEducation(true);
  }

  function removeEducationHandler(educationUUID: string) {
    // Loop through the projects and don't return the selected project === delete the project
    const newEducations = educations.filter(
      (education) => education.uuid !== educationUUID
    );

    setEducations(newEducations);
  }

  return (
    <div className='border-solid rounded-2xl border-gray-200 border-2 flex flex-col bg-[#ffffff] shadow-md px-5'>
      <div
        role='button'
        tabIndex={0}
        className='w-full flex items-center justify-between py-5 cursor-pointer outline-none'
        onClick={() => setShowEducation((prevState) => !prevState)}
      >
        <div className='flex items-center gap-4'>
          <img
            src={graduationSvg}
            alt='business-card'
            className='w-9 rounded-lg'
          />
          <h1 className='antialiased font-bold font-sans text-xl'>Education</h1>
        </div>
        <div>
          <img
            src={downArrowSvg}
            alt='business-card'
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              showEducation ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>

      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-col ${!showEducation ? 'hidden' : ''}`}>
          {/* Render Educations */}
          <ul>
            {educations &&
              educations.map((education) => {
                return (
                  <li
                    key={education.uuid}
                    className='cursor-pointer flex gap-2 items-center border-b-2 border-solid border-gray-200 p-2 first:border-b-2 first:border-t-0 last:border-t-0 last:border-b-0'
                  >
                    <button
                      className=' hover:bg-gray-100 rounded-xl'
                      onClick={() => removeEducationHandler(education.uuid)}
                    >
                      <img src={minusSvg} className='w-8 h-8' />
                    </button>
                    <h1 onClick={() => updateEducationHandler(education)}>
                      {education.school}
                    </h1>
                  </li>
                );
              })}
          </ul>
          <div className={`flex flex-col gap-4 w-full`}>
            <form
              onSubmit={submitHandler}
              className={`flex flex-col gap-4 ${showEducation ? 'pb-4' : ''}`}
            >
              <div className='input-class flex flex-col'>
                <label
                  htmlFor='school'
                  className='mb-2 ml-2 antialiased text-md font-semibold'
                >
                  School
                </label>
                <input
                  id='school'
                  className={`w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg ${
                    schoolError && 'outline-2 outline-solid outline-red-300'
                  }`}
                  placeholder='Enter school / university'
                  onChange={(e) => {
                    setSchool(e.target.value);
                    setSchoolError(false);
                  }}
                  value={school}
                />
                <p className={`text-red-600 ${!schoolError && 'hidden'}`}>
                  {schoolError && schoolError}
                </p>
              </div>
              <div className='input-class flex flex-col'>
                <label
                  htmlFor='degree'
                  className='mb-2 ml-2 antialiased text-md font-semibold'
                >
                  Degree
                </label>
                <input
                  id='degree'
                  className={`w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg ${
                    degreeError && 'outline-2 outline-solid outline-red-300'
                  }`}
                  placeholder='Enter degree / Field of Study / Exchange Semester'
                  onChange={(e) => {
                    setDegree(e.target.value);
                    setDegreeError(false);
                  }}
                  value={degree}
                />
              </div>
              <p className={`text-red-600 ${!degreeError && 'hidden'}`}>
                {degreeError && degreeError}
              </p>
              <div className='input-class flex flex-col lg:flex-row w-full justify-between lg:gap-4'>
                <div className='input-class flex flex-col w-full lg:w-6/12'>
                  <label
                    htmlFor='city'
                    className='ml-2 antialiased text-sm font-semibold'
                  >
                    City
                  </label>
                  <input
                    id='city'
                    className={`w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg ${
                      cityError && 'outline-2 outline-solid outline-red-300'
                    }`}
                    placeholder='Enter City'
                    onChange={(e) => {
                      setCity(e.target.value);
                      setCityError(false);
                    }}
                    value={city}
                  />
                </div>
                <div className='input-class flex flex-col w-full lg:w-6/12'>
                  <label
                    htmlFor='country'
                    className='ml-2 antialiased text-sm font-semibold'
                  >
                    Country
                  </label>
                  <input
                    id='country'
                    className={`w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg ${
                      countryError && 'outline-2 outline-solid outline-red-300'
                    }`}
                    placeholder='Enter Country'
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setCountryError(false);
                    }}
                    value={country}
                  />
                </div>
              </div>
              <p className={`text-red-600 ${!cityError && 'hidden'}`}>
                {cityError && cityError}
              </p>
              <p className={`text-red-600 ${!countryError && 'hidden'}`}>
                {countryError && countryError}
              </p>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='font-bold rounded-2xl antialiased font-sans px-6 p-3'
                  onClick={() => {
                    setSelectedUUID('');
                    setSchool('');
                    setDegree('');
                    setCity('');
                    setCountry('');
                    setShowEducation(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='rounded-2xl text-white antialiased font-sans font-bold px-10 p-4 bg-gradient-to-r from-[#ED0789] to-[#FC6668] w-full lg:w-fit'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
