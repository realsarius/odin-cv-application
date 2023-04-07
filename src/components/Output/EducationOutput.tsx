/* eslint-disable react/jsx-one-expression-per-line */

import graduationSvg from '../../assets/graduation-cap.svg';
import downArrowSvg from '../../assets/down-arrow.svg';

import { useState } from 'react';
import EducationInput from '../Input/EducationInput';

type Education = {
  id: string;
  school: string;
  degree: string;
  city: string;
  country: string;
};

interface EducationOutputProps {
  changeEducationState: (state: boolean) => void;
  educationHandler: (newItem: Education) => void;
  education: Education[];
}

const EducationOutput = ({
  changeEducationState,
  educationHandler,
  education,
}: EducationOutputProps) => {
  const [showEducationInput, setShowEducationInput] = useState(true);

  const onEducationState = () => {
    setShowEducationInput((prevState) => !prevState);
    changeEducationState(showEducationInput);
  };

  const printEducations = () => {
    const data = education.map((ed) => (
      <li key={ed.id} className="flex">
        <p className="font-bold font-sans antialiased">{ed.school}</p>,{' '}
        <p className="ml-1 italic">{ed.degree}</p>
      </li>
    ));

    return <ul className="flex flex-col gap-2">{data}</ul>;
  };

  return (
    <div className="border-solid rounded-2xl border-gray-200 border-2 flex flex-col bg-[#ffffff] shadow-md px-5">
      <div
        role="button"
        tabIndex={0}
        className="w-full flex items-center justify-between py-5 cursor-pointer outline-none"
        onClick={onEducationState}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onEducationState();
          }
        }}
      >
        <div className="flex items-center gap-4">
          <img
            src={graduationSvg}
            alt="business-card"
            className="w-9 rounded-lg"
          />
          <h1 className="antialiased font-bold font-sans text-xl">Education</h1>
        </div>
        <div>
          <img
            src={downArrowSvg}
            alt="business-card"
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              !showEducationInput ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className={`flex flex-col ${showEducationInput ? 'hidden' : ''}`}>
          {printEducations()}
        </div>
        <EducationInput
          hidden={showEducationInput}
          educationHandler={educationHandler}
        />
      </div>
    </div>
  );
};

export default EducationOutput;
