import React, { useContext, useState } from 'react';
import downArrowSvg from '../../assets/down-arrow.svg';
import suitcaseSvg from '../../assets/suitcase.svg';
import minusSvg from '../../assets/minus.svg';
import plusSvg from '../../assets/plus.svg';
import { PersonalProjectsContext } from '../../App';
import { PersonalProjectsProps } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export default function PersonalProjects() {
  const { projects, setProjects } = useContext(PersonalProjectsContext);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);

  // This state is to show or hide the input form
  const [showAddProject, setShowAddProject] = useState(false);

  // We're only checking for the project title. Other inputs are optional.
  const [projectTitleError, setProjectTitleError] = useState(false);

  // States for inputs
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  // Selected UUID for update | Cancel button clears it. | Save button clears it after update(if it's stage for update).
  const [selectedUUID, setSelectedUUID] = useState('');

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Check if a project is selected
    const selectedProjectIndex = projects.findIndex(
      (project) => project.projectUUID === selectedUUID
    );

    // If a project is selected, update it.
    if (selectedProjectIndex !== -1) {
      const updatedProjects = [...projects];
      updatedProjects[selectedProjectIndex] = {
        ...updatedProjects[selectedProjectIndex],
        projectTitle: title || '',
        projectSubtitle: subtitle || '',
        projectCity: city || '',
        projectCountry: country || '',
        projectDescription: description || '',
      };
      setProjects(updatedProjects);
      setSelectedUUID('');
      setShowAddProject(false);

      // Clear Inputs
      setTitle('');
      setSubtitle('');
      setCity('');
      setCountry('');
      setDescription('');
    } else {
      // If there's no existing project selected, create one.
      if ((title ?? '').trim().length < 3) {
        setProjectTitleError(true);
      } else {
        const newProject = {
          projectUUID: uuidv4(),
          projectTitle: title || '',
          projectSubtitle: subtitle || '',
          projectCity: city || '',
          projectCountry: country || '',
          projectDescription: description || '',
        };

        const newProjects = [...projects, newProject];

        setProjects(newProjects);

        setShowAddProject(false);
        // Clear Inputs
        setTitle('');
        setSubtitle('');
        setCity('');
        setCountry('');
        setDescription('');
      }
    }
  }

  function removeProjectHandler(projectUUID: string) {
    // Loop through the projects and don't return the selected project === delete the project
    const newProjects = projects.filter(
      (project) => project.projectUUID !== projectUUID
    );

    setProjects(newProjects);
  }

  function updateProjectHandler(project: PersonalProjectsProps) {
    // Change the value of the inputs to the selected project for better user experience
    setSelectedUUID(project.projectUUID);
    setTitle(project.projectTitle);
    setSubtitle(project.projectSubtitle);
    setCity(project.projectCity);
    setCountry(project.projectCountry);
    setDescription(project.projectDescription);

    // Show the input form
    setShowAddProject(true);
  }

  return (
    <div className='border-solid rounded-2xl border-gray-200 border-2 flex flex-col bg-[#ffffff] shadow-md px-5'>
      <div
        role='button'
        tabIndex={0}
        className='w-full flex items-center justify-between py-5 cursor-pointer outline-none'
        onClick={() => setShowPersonalProjects((prevState) => !prevState)}
      >
        <div className='flex items-center gap-4'>
          <img
            src={suitcaseSvg}
            alt='business-card'
            className='w-9 rounded-lg'
          />
          <h1 className='antialiased font-bold font-sans text-xl'>
            Personal Projects
          </h1>
        </div>
        <div>
          <img
            src={downArrowSvg}
            alt='business-card'
            className={`w-6 rounded-lg transition-all duration-300 ease-in-out origin-center ${
              showPersonalProjects ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <div className={`${!showPersonalProjects && 'hidden'} `}>
        <ul className=''>
          {projects &&
            projects.map((project) => {
              return (
                <li
                  key={project.projectUUID}
                  className='cursor-pointer flex gap-2 items-center border-b-2 border-solid border-gray-200 p-2 first:border-b-2 first:border-t-0 last:border-t-0 last:border-b-0'
                >
                  <button
                    className=' hover:bg-gray-100 rounded-xl'
                    onClick={() => removeProjectHandler(project.projectUUID)}
                  >
                    <img src={minusSvg} className='w-8 h-8' />
                  </button>
                  <h1 onClick={() => updateProjectHandler(project)}>
                    {project.projectTitle}
                  </h1>
                </li>
              );
            })}
        </ul>
        {showAddProject ? (
          <form
            className='personal-project-form flex flex-col gap-4 py-4'
            onSubmit={submitHandler}
          >
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='projectTitle'
                className='mb-2 ml-2 antialiased text-md font-semibold'
              >
                Title
              </label>
              <input
                type='text'
                id='projectTitle'
                className={`w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg${
                  projectTitleError &&
                  'outline-2 outline-solid outline-red-300 rounded'
                }`}
                placeholder='Enter Project'
                onChange={(e) => {
                  setTitle(e.target.value);
                  setProjectTitleError(false);
                }}
                value={title}
              />
              <p className={`text-red-600`}>
                {projectTitleError && 'Title has to be more than 5 characters'}
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='projectSubtitle'
                className='mb-2 ml-2 antialiased text-md font-semibold'
              >
                Subtitle
              </label>
              <input
                type='text'
                id='projectSubtitle'
                className='w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg'
                placeholder='Enter Subtitle'
                onChange={(e) => setSubtitle(e.target.value)}
                value={subtitle}
              />
            </div>
            <div className='input-class flex flex-col lg:flex-row w-full justify-between lg:gap-4'>
              <div className='flex flex-col gap-2 w-6/12'>
                <label
                  htmlFor='projectCity'
                  className='mb-2 ml-2 antialiased text-md font-semibold'
                >
                  City
                </label>
                <input
                  type='text'
                  id='projectCity'
                  className='w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg'
                  placeholder='Enter City'
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>
              <div className='flex flex-col gap-2 w-6/12'>
                <label
                  htmlFor='projectCountry'
                  className='mb-2 ml-2 antialiased text-md font-semibold'
                >
                  Country
                </label>
                <input
                  type='text'
                  id='projectCountry'
                  className='w-full antialiased p-3 font-sans outline-none bg-[#F3F4F6] rounded-lg'
                  placeholder='Enter Country'
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                />
              </div>
            </div>
            <textarea
              className='w-full h-60 border-2 border-gray-200 rounded-lg outline-none p-2 text-lg font-sans antialiased'
              placeholder='Enter Description...'
              id='projectDescription'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <div className='flex justify-end'>
              <button
                type='button'
                className='font-bold rounded-2xl antialiased font-sans px-6 p-3'
                onClick={() => {
                  setSelectedUUID('');
                  setTitle('');
                  setSubtitle('');
                  setCity('');
                  setCountry('');
                  setDescription('');
                  setShowAddProject(false);
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
        ) : (
          <div className='w-full flex justify-center'>
            <button
              onClick={() => setShowAddProject(true)}
              className='outline outline-2 outline-slate-400 rounded w-auto mx-auto my-4'
            >
              <img src={plusSvg} className='w-12 h-12' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
