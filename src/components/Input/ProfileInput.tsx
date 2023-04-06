import { useState } from 'react';

interface ProfileInputProps {
  hidden: boolean;
  onSubmit: (information: string) => void;
  handleDescription: (description: string) => void;
  hideIt: (value: boolean) => void;
}

const ProfileInput = ({
  hidden,
  onSubmit,
  handleDescription,
  hideIt,
}: ProfileInputProps) => {
  const [information, setInformation] = useState('');

  const changeListener = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInformation(event.target.value);
    handleDescription(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hideIt(true);
    onSubmit(information);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`flex flex-col gap-4 ${hidden ? 'hidden' : ''}`}
    >
      <textarea
        onChange={changeListener}
        className="w-full h-60 border-2 border-gray-200 rounded-lg outline-none p-2 text-lg font-sans antialiased"
      />
      <div className="flex justify-end mb-5">
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

export default ProfileInput;
