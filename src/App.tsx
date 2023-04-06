/* eslint-disable prettier/prettier */
import { useState } from 'react';
import GeneralInformation from './components/Output/GeneralInformationOutput';
import GeneralInformationInput from './components/Input/GeneralInformationInput';
import GeneralInformationPreview from './components/Preview/GeneralInformationPreview';
import ProfileOutput from './components/Output/ProfileOutput';
import ProfilePreview from './components/Preview/ProfilePreview';
import EducationOutput from './components/Output/EducationOutput';
import EducationPreview from './components/Preview/EducationPreview';

type Education = {
  id: string;
  school: string;
  degree: string;
  city: string;
  country: string;
};

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    job: '',
    email: '',
    phone: '',
    address: '',
  });
  const [education, setEducation] = useState<Education[]>([]);
  const [profile, setProfile] = useState('');
  const [infoEditState, setInfoEditState] = useState(false);
  const [educationEditState, setEducationEditState] = useState(false);

  const saveProfileHandler = (enteredDescription: string) => {
    setProfile(enteredDescription);
  };

  const showEditState = (editState: boolean) => {
    setInfoEditState(editState);
    return editState;
  };

  const changeEducationState = () => {
    setEducationEditState((prevState) => !prevState);
  };

  const educationHandler = (newItem: Education) => {
    console.log(newItem);
    setEducation((prevEducation) => [...prevEducation, newItem]);
  };

  const saveUserDataHandler = (enteredUserData: User) => {
    setUser({
      name: enteredUserData.name,
      job: enteredUserData.job,
      email: enteredUserData.email,
      phone: enteredUserData.phone,
      address: enteredUserData.address,
    });
  };

  const handleInputChange = (
    name: string,
    job: string,
    email: string,
    phone: string,
    address: string,
  ) => {
    setUser((prevState) => ({
      ...prevState,
      name,
      job,
      email,
      phone,
      address,
    }));
  };

  return (
    <div className="bg-[#F3F4F6] w-full h-screen flex justify-between px-5 pt-5 gap-4 sm:gap-8 lg:justify-center">
      <div className="left-side min-w-[20rem] w-6/12 flex flex-col gap-6 lg:w-[600px]">
        <div className="user-section">
          {!infoEditState ? (
            <GeneralInformation user={user} showEditState={showEditState} />
          ) : (
            <GeneralInformationInput
              onSaveUserData={saveUserDataHandler}
              showEditState={showEditState}
              user={user}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
        <div className="profile-section">
          <ProfileOutput saveProfileHandler={saveProfileHandler} />
        </div>
        <div className="education-section">
          <EducationOutput
            changeEducationState={changeEducationState}
            educationHandler={educationHandler}
            education={education}
          />
        </div>
      </div>
      <div className="right-side border-solid border-gray-200 rounded-md shadow-lg border-4 min-w-[210mm] w-[210mm] h-[297mm]">
        <div className="page py-16 px-16">
          <GeneralInformationPreview user={user} />
          <ProfilePreview profile={profile} />
          <EducationPreview education={education} />
        </div>
      </div>
    </div>
  );
};

export default App;
