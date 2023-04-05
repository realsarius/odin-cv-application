/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

interface GeneralInformationInputProps {
  user: {
    name: string;
    job: string;
    email: string;
    phone: string;
    address: string;
  };
  onSaveUserData: (userData: {
    name: string;
    job: string;
    email: string;
    phone: string;
    address: string;
  }) => void;
  showEditState: (editState: boolean) => void;
  handleInputChange: (
    name: string,
    job: string,
    email: string,
    phone: string,
    address: string
  ) => void;
}

const GeneralInformationInput = ({
  user,
  onSaveUserData,
  showEditState,
  handleInputChange,
}: GeneralInformationInputProps) => {
  const [enteredName, setEnteredName] = useState(user.name);
  const [enteredJob, setEnteredJob] = useState(user.job);
  const [enteredEmail, setEnteredEmail] = useState(user.email);
  const [enteredPhone, setEnteredPhone] = useState(user.phone);
  const [enteredAddress, setEnteredAddress] = useState(user.address);
  const [showEditPersonalDetails, setShowEditPersonalDetails] = useState(false);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
    handleInputChange(
      event.target.value,
      enteredJob,
      enteredEmail,
      enteredPhone,
      enteredAddress
    );
  };

  const jobChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredJob(event.target.value);
    handleInputChange(
      enteredName,
      event.target.value,
      enteredEmail,
      enteredPhone,
      enteredAddress
    );
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
    handleInputChange(
      enteredName,
      enteredJob,
      event.target.value,
      enteredPhone,
      enteredAddress
    );
  };

  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPhone(event.target.value);
    handleInputChange(
      enteredName,
      enteredJob,
      enteredEmail,
      event.target.value,
      enteredAddress
    );
  };

  const addressChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAddress(event.target.value);
    handleInputChange(
      enteredName,
      enteredJob,
      enteredEmail,
      enteredPhone,
      event.target.value
    );
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      job: enteredJob,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
    };

    onSaveUserData(userData);
    setShowEditPersonalDetails((prevState) => !prevState);
    showEditState(showEditPersonalDetails);
  };

  const cancelHandler = () => {
    setShowEditPersonalDetails((prevState) => !prevState);
    showEditState(showEditPersonalDetails);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="left-side w-full border-solid rounded-2xl border-gray-200 border-2 p-5 bg-[#ffffff] shadow-lg"
    >
      <h1 className="mb-5 antialiased font-bold font-sans text-xl">
        Edit personal details
      </h1>
      <div className="input-class flex flex-col">
        <label
          htmlFor="name"
          className="mb-2 ml-2 antialiased text-sm font-semibold"
        >
          Full Name
        </label>
        <input
          onChange={nameChangeHandler}
          id="name"
          className="w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          value={enteredName}
        />
      </div>
      <div className="input-class flex flex-col">
        <label
          htmlFor="job"
          className="mt-4 ml-2 antialiased text-sm font-semibold"
        >
          Job title
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          onChange={jobChangeHandler}
          id="job"
          className="w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          value={enteredJob}
        />
      </div>
      {/* 2 input group */}
      <div className="input-class flex w-full justify-between gap-4">
        <div className="input-class flex flex-col w-6/12">
          <label
            htmlFor="email"
            className="mt-4 ml-2 antialiased text-sm font-semibold"
          >
            Email
            <span className="ml-2 text-xs text-gray-400">recommended</span>
          </label>
          <input
            onChange={emailChangeHandler}
            id="email"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
            value={enteredEmail}
          />
        </div>
        <div className="input-class flex flex-col w-6/12">
          <label
            htmlFor="phone"
            className="mt-4 ml-2 antialiased text-sm font-semibold"
          >
            Phone
            <span className="ml-2 text-xs text-gray-400">recommended</span>
          </label>
          <input
            onChange={phoneChangeHandler}
            id="phone"
            className="w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
            value={enteredPhone}
          />
        </div>
      </div>
      <div className="input-class flex flex-col">
        <label
          htmlFor="address"
          className="w-4/6 mt-2 ml-2 antialiased text-sm font-semibold"
        >
          Address
          <span className="ml-2 text-xs text-gray-400">recommended</span>
        </label>
        <input
          onChange={addressChangeHandler}
          id="address"
          className="w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg"
          value={enteredAddress}
        />
      </div>
      <div className="buttons mt-4 flex justify-end">
        <div className="flex gap-8">
          <button
            onClick={cancelHandler}
            type="button"
            className="font-bold rounded-2xl antialiased font-sans px-6 p-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-2xl text-white antialiased font-sans font-bold px-10 p-4 bg-gradient-to-r from-[#ED0789] to-[#FC6668]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default GeneralInformationInput;
