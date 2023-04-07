import { useState } from 'react';
import ProfileInput from '../Input/ProfileInput';

import idSvg from '../../assets/id-card.svg';
import downArrowSvg from '../../assets/down-arrow.svg';

interface ProfileOutputProps {
  saveProfileHandler: (description: string) => void;
}

const ProfileOutput = ({ saveProfileHandler }: ProfileOutputProps) => {
  const [showProfileInput, setShowProfileInput] = useState(true);

  const handleDescription = (enteredDescription: string) => {
    saveProfileHandler(enteredDescription);
  };

  const showProfileOutput = () => {
    setShowProfileInput((prevState) => !prevState);
  };

  return (
    <div className="border-solid rounded-2xl border-gray-200 border-2 flex flex-col gap-3 bg-[#ffffff] shadow-md px-5">
      <div
        role="button"
        tabIndex={0}
        className="w-full flex items-center justify-between py-5 cursor-pointer outline-none"
        onClick={showProfileOutput}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            showProfileOutput();
          }
        }}
      >
        <div className="flex items-center gap-4">
          <img src={idSvg} alt="business-card" className="w-9 rounded-lg" />
          <h1 className="antialiased font-bold font-sans text-xl">Profile</h1>
        </div>
        <div>
          <img
            src={downArrowSvg}
            alt="business-card"
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              !showProfileInput ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <ProfileInput
        hidden={showProfileInput}
        onSubmit={handleDescription}
        handleDescription={handleDescription}
        hideIt={setShowProfileInput}
      />
    </div>
  );
};

export default ProfileOutput;
