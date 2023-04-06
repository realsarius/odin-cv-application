import { useState } from 'react';
import EducationInputAdd from './EducationInputAdd';

const EducationInput = ({ hidden, educationHandler }) => {
  const [addEducationState, setAddEducationState] = useState(false);

  const clickHandler = () => {
    setAddEducationState(true);
  };

  return (
    <div className={`flex flex-col gap-4 pb-4 ${hidden ? 'hidden' : ''}`}>
      <div className="flex justify-center">
        <div
          role="button"
          tabIndex={0}
          className={`flex justify-center px-6 py-1 gap-2 border-solid border-4 border-gray-200 rounded-full w-[10rem] cursor-pointer ${
            addEducationState ? 'hidden' : ''
          }`}
          onClick={clickHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              clickHandler();
            }
          }}
        >
          <img src="src/assets/plus.svg" className="w-7" alt="plus" />
          <div className="antialiased font-sans text-lg font-bold">
            Education
          </div>
        </div>
      </div>
      <EducationInputAdd
        addEducationState={addEducationState}
        setAddEducationState={setAddEducationState}
        educationHandler={educationHandler}
      />
    </div>
  );
};

export default EducationInput;
