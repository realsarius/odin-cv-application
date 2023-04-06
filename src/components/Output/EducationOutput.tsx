import { useState } from 'react';
import EducationInput from '../Input/EducationInput';

const EducationOutput = ({ changeEducationState }) => {
  const [showEducationInput, setShowEducationInput] = useState(true);

  const onEducationState = () => {
    setShowEducationInput((prevState) => !prevState);
    changeEducationState(showEducationInput);
  };

  return (
    <div className="border-solid rounded-2xl border-gray-200 border-2 flex flex-col gap-3 bg-[#ffffff] shadow-md px-5">
      <div
        role="button"
        tabIndex={0}
        className={`w-full flex items-center justify-between py-5 cursor-pointer outline-none`}
        onClick={onEducationState}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onEducationState();
          }
        }}
      >
        <div className="flex items-center gap-4">
          <img
            src="src/assets/graduation-cap.svg"
            alt="business-card"
            className="w-9 rounded-lg"
          />
          <h1 className="antialiased font-bold font-sans text-xl">Education</h1>
        </div>
        <div>
          <img
            src="src/assets/down-arrow.svg"
            alt="business-card"
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              !showEducationInput ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <EducationInput hidden={showEducationInput} />
    </div>
  );
};

export default EducationOutput;
