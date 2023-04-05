import { useState } from 'react';
import GeneralInformation from './components/Output/GeneralInformation';
import GeneralInformationInput from './components/Input/GeneralInformationInput';

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    job: '',
    email: '',
    phone: '',
    address: '',
  });
  const [infoEditState, setInfoEditState] = useState(false);

  const showEditState = (editState) => {
    setInfoEditState(editState);
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
    address: string
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
    <div className="bg-[#F3F4F6] w-full flex justify-between px-5 pt-5 gap-4 sm:gap-8">
      <div className="left-side w-6/12 flex flex-col ">
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
      <div className="right-side w-6/12 border-solid border-red-600 border-4">
        <p>asd</p>
      </div>
    </div>
  );
};

export default App;
