import idSvg from '../../assets/id-card.svg';
import downArrowSvg from '../../assets/down-arrow.svg';
import { useState } from 'react';

interface ProfileProps {
  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;
}

export default function Profile({ profile, setProfile }: ProfileProps) {
  const [showProfileInput, setShowProfileInput] = useState(false);

  function changeListener(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setProfile(event.target.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(profile);
    setShowProfileInput(true);
  }

  return (
    <div className='border-solid rounded-2xl border-gray-200 border-2 flex flex-col gap-3 bg-[#ffffff] shadow-md px-5'>
      <div
        role='button'
        tabIndex={0}
        className='w-full flex items-center justify-between py-5 cursor-pointer outline-none'
        onClick={() => setShowProfileInput((prevState) => !prevState)}
      >
        <div className='flex items-center gap-4'>
          <img src={idSvg} alt='business-card' className='w-9 rounded-lg' />
          <h1 className='antialiased font-bold font-sans text-xl'>Profile</h1>
        </div>
        <div>
          <img
            src={downArrowSvg}
            alt='business-card'
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              showProfileInput ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      {showProfileInput && (
        <form onSubmit={submitHandler} className={`flex flex-col gap-4`}>
          <textarea
            onChange={changeListener}
            className='w-full h-60 border-2 border-gray-200 rounded-lg outline-none p-2 text-lg font-sans antialiased'
            value={profile}
          />
          <div className='flex justify-end mb-5'>
            <button
              type='submit'
              className='rounded-2xl text-white antialiased font-sans font-bold px-10 p-4 bg-gradient-to-r from-[#ED0789] to-[#FC6668] w-full lg:w-fit'
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
