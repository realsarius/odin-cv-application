import React, { useContext, useState } from 'react';
import emailPng from '../../assets/mail-inbox-app.png';
import phonePng from '../../assets/phone-call.png';
import addressPng from '../../assets/location.png';
import { PersonalDetailsContext } from '../../App';

export default function PersonalDetails() {
  const { personalDetails, setPersonalDetails } = useContext(
    PersonalDetailsContext
  );

  const [showPersonalInput, setShowPersonalInput] = useState(false);

  const [fullName, setFullName] = useState('Teresa D Hill');
  const [jobTitle, setJobTitle] = useState('Frontend Developer');
  const [email, setEmail] = useState('bernice1989@yahoo.com');
  const [phone, setPhone] = useState('570-574-0369');
  const [address, setAddress] = useState('Pittston, Pennsylvania');

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (fullName && jobTitle && email && phone && address) {
      // If all values are non-empty, update the state
      setPersonalDetails({
        fullName,
        jobTitle,
        email,
        phone,
        address,
      });
      setShowPersonalInput(false);
    } else {
      // Handle the case where any of the values are empty
      console.log('Please fill in all fields.');
    }
  }

  if (showPersonalInput) {
    return (
      <form
        onSubmit={submitHandler}
        className='left-side w-full border-solid rounded-2xl border-gray-200 border-2 p-5 bg-[#ffffff] shadow-lg'
      >
        <h1 className='mb-5 antialiased font-bold font-sans text-xl'>
          Edit personal details
        </h1>
        <div className='input-class flex flex-col'>
          <label
            htmlFor='name'
            className='mb-2 ml-2 antialiased text-sm font-semibold'
          >
            Full Name
          </label>
          <input
            id='name'
            className='w-full lg:w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='input-class flex flex-col'>
          <label
            htmlFor='job'
            className='mt-4 ml-2 antialiased text-sm font-semibold'
          >
            Job title
            <span className='ml-2 text-xs text-gray-400'>optional</span>
          </label>
          <input
            id='job'
            className='w-full lg:w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        {/* 2 input group */}
        <div className='input-class flex flex-col lg:flex-row w-full justify-between gap-4'>
          <div className='input-class flex flex-col w-full lg:w-6/12'>
            <label
              htmlFor='email'
              className='mt-4 ml-2 antialiased text-sm font-semibold'
            >
              Email
              <span className='ml-2 text-xs text-gray-400'>recommended</span>
            </label>
            <input
              id='email'
              className='w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-class flex flex-col w-full lg:w-6/12'>
            <label
              htmlFor='phone'
              className='lg:mt-4 ml-2 antialiased text-sm font-semibold'
            >
              Phone
              <span className='ml-2 text-xs text-gray-400'>recommended</span>
            </label>
            <input
              id='phone'
              className='w-full antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className='input-class flex flex-col'>
          <label
            htmlFor='address'
            className='w-4/6 mt-2 ml-2 antialiased text-sm font-semibold'
          >
            Address
            <span className='ml-2 text-xs text-gray-400'>recommended</span>
          </label>
          <input
            id='address'
            className='w-full lg:w-4/6 antialiased px-3 font-sans py-3 outline-none bg-[#F3F4F6] rounded-lg'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='buttons mt-4 flex justify-end'>
          <div className='flex gap-8'>
            <button
              type='button'
              className='font-bold rounded-2xl antialiased font-sans px-6 p-3'
              onClick={() => setShowPersonalInput(false)}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-2xl text-white antialiased font-sans font-bold px-10 p-4 bg-gradient-to-r from-[#ED0789] to-[#FC6668]'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div
        className='border-solid rounded-2xl border-gray-200 border-2 p-5 cursor-pointer flex flex-col gap-3 bg-[#ffffff] shadow-md'
        role='button'
        tabIndex={0}
        onClick={() => setShowPersonalInput(true)}
      >
        <p className='text-lg font-bold'>
          {personalDetails.fullName.trim().length === 0
            ? 'Your Name'
            : personalDetails.fullName}
        </p>
        <div className='text-sm flex items-center gap-2'>
          <img src={emailPng} className='w-5' alt='email-icon' />{' '}
          {personalDetails.email.trim().length === 0 ? (
            <p className='text-gray-500'>Email</p>
          ) : (
            <p>{personalDetails.email}</p>
          )}
        </div>
        <div className='text-sm flex items-center gap-2'>
          <img src={phonePng} className='w-5' alt='email-icon' />{' '}
          {personalDetails.phone.trim().length === 0 ? (
            <p className='text-gray-500'>Phone</p>
          ) : (
            <p>{personalDetails.phone}</p>
          )}
        </div>
        <div className='text-sm flex items-center gap-2'>
          <img src={addressPng} className='w-5' alt='email-icon' />{' '}
          {personalDetails.address.trim().length === 0 ? (
            <p className='text-gray-500'>Address</p>
          ) : (
            <p>{personalDetails.address}</p>
          )}
        </div>
      </div>
    );
  }
}
