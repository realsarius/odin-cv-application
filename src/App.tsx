import { createContext, useState } from 'react';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import PersonalDetailsPreview from './components/PersonalDetails/PersonalDetailsPreview';
import Profile from './components/Profile/Profile';
import {
  PersonalProjectsContextValue,
  PersonalDetailsProps,
  PersonalDetailsContextValue,
  EducationContextValue,
} from './types';

import ProfilePreview from './components/Profile/ProfilePreview';
import Education from './components/Education/Education';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import EducationPreview from './components/Education/EducationPreview';
import PersonalProjectsPreview from './components/PersonalProjects/PersonalProjectsPreview';

import { usePDF } from 'react-to-pdf';

export const PersonalDetailsContext =
  createContext<PersonalDetailsContextValue>({
    personalDetails: {
      fullName: 'Your Name',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
    },
    setPersonalDetails: () => {},
  });

export const PersonalProjectsContext =
  createContext<PersonalProjectsContextValue>({
    projects: [],
    setProjects: () => {},
  });

export const EducationsContext = createContext<EducationContextValue>({
  educations: [
    {
      uuid: 'c6401bc2-184c-496b-b8d5-0fd23f5844bf',
      school: 'Example School',
      degree: 'Example Degree',
      city: 'Example City',
      country: 'Example Country',
    },
  ],
  setEducations: () => {},
});

export default function App() {
  // Personal Deatils
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsProps>({
    fullName: 'Teresa D Hill',
    jobTitle: 'Frontend Developer',
    email: 'bernice1989@yahoo.com',
    phone: '570-574-0369',
    address: 'Pittston, Pennsylvania',
  });

  // Profile
  const [profile, setProfile] = useState(
    'Travel practitioner. Infuriatingly humble student. Lifelong music junkie. Explorer. Tv expert.'
  );

  // Education
  const [educations, setEducations] = useState([
    {
      uuid: 'c6401bc2-184c-496b-b8d5-0fd23f5844bf',
      school: 'Pennsylvania University',
      degree: '3.44 / Computer Engineering',
      city: 'Pennsylvania',
      country: 'United States',
    },
  ]);

  // Personal Projects
  const [personalProjects, setPersonalProjects] = useState([
    {
      projectUUID: '259e1311-248f-4137-b533-91119bc4ea12',
      projectTitle: 'Blog Project',
      projectSubtitle: '',
      projectCity: 'Pennsylvania',
      projectCountry: 'United States',
      projectDescription:
        'Blog project using MERN Stack. MongoDB - ExpressJS - React - NodeJS - TailwindCSS - Vite',
    },
    {
      projectUUID: '259e1311-248f-4137-b533-91119bc4ea11',
      projectTitle: "Orbit's Synthwave",
      projectSubtitle: '',
      projectCity: 'Pennsylvania',
      projectCountry: 'United States',
      projectDescription:
        'I attempted to create a replica of the Retro Synthwave website using various frontend frameworks. React - NodeJS - ExpressJS - MongoDB - Firebase - Bootstrap - FontAwesome - IntelliJ',
    },
    {
      projectUUID: '259e1311-248f-4137-b533-91119bc4ea10',
      projectTitle: 'Resume Builder',
      projectSubtitle: '',
      projectCity: 'Pennsylvania',
      projectCountry: 'United States',
      projectDescription:
        'I tried to create a dynamic resume builder as a project from The Odin Project. React - TailwindCSS',
    },
    {
      projectUUID: '259e1311-248f-4137-b533-91119bc4ea13',
      projectTitle: 'Sign Up Form',
      projectSubtitle: '',
      projectCity: 'Pennsylvania',
      projectCountry: 'United States',
      projectDescription:
        'A responsive form validation created using JavaScript. JavaScript',
    },
  ]);

  const { toPDF, targetRef } = usePDF({
    filename: `${personalDetails.fullName.trim()} Resume.pdf`,
  });

  return (
    <div className='bg-slate-200 w-screen h-screen'>
      <div className='bg-slate-200 container mx-auto'>
        <div className='bg-slate-200 flex gap-4 h-full'>
          <div className='left-side w-full'>
            <div className='flex flex-col sm:gap-4 sm:p-2'>
              <div className='border-solid rounded-2xl border-gray-200 border-2 flex flex-col bg-[#ffffff] shadow-md px-5'>
                <div className='w-full flex items-center justify-between py-5 outline-none'>
                  <div className='flex items-center gap-4 justify-between w-full'>
                    <h1 className='antialiased font-bold font-sans text-xl'>
                      Resume
                    </h1>
                    <button onClick={() => toPDF()}>Download</button>
                  </div>
                </div>
              </div>
              <PersonalDetailsContext.Provider
                value={{
                  personalDetails,
                  setPersonalDetails,
                }}
              >
                <PersonalDetails />
              </PersonalDetailsContext.Provider>

              <div>
                <Profile profile={profile} setProfile={setProfile} />
              </div>
              <div>
                <EducationsContext.Provider
                  value={{ educations, setEducations }}
                >
                  <Education />
                </EducationsContext.Provider>
              </div>
              <div>
                <PersonalProjectsContext.Provider
                  value={{
                    projects: personalProjects,
                    setProjects: setPersonalProjects,
                  }}
                >
                  <PersonalProjects />
                </PersonalProjectsContext.Provider>
              </div>
            </div>
          </div>

          <div className='right-side bg-slate bg-[#ffffff] mt-2 w-[210mm] min-w-[210mm] max-w-[210mm] min-h-[297mm] max-h-[297mm] h-[297mm]'>
            <div className='a4-paper w-[210mm] min-w-[210mm] max-w-[210mm] min-h-[297mm] max-h-[297mm] h-[297mm]'>
              <div ref={targetRef}>
                <PersonalDetailsPreview personalDetails={personalDetails} />
                <ProfilePreview profile={profile} />
                <EducationPreview educations={educations} />
                <PersonalProjectsPreview personalProjects={personalProjects} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
