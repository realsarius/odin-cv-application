interface User {
  name: string;
  job: string;
  email: string;
  phone: string;
  address: string;
}

interface GeneralInformationPreviewProps {
  user: User;
}

const GeneralInformationPreview = ({
  user,
}: GeneralInformationPreviewProps) => {
  const checkIfNameEmpty = () => {
    if (user.name.trim().length > 0) {
      return true;
    }
    return false;
  };

  const checkIfEmailEmpty = () => {
    if (user.email.trim().length > 0) {
      return true;
    }
    return false;
  };

  const checkIfAddressEmpty = () => {
    if (user.address.trim().length > 0) {
      return true;
    }
    return false;
  };

  const checkIfPhoneEmpty = () => {
    if (user.phone.trim().length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="name-section">
        <h1 className="text-4xl font-serif font-bold">
          {checkIfNameEmpty() ? (
            `${user.name}`
          ) : (
            <p className="text-gray-400 font-sans">Your Name</p>
          )}
        </h1>
      </div>
      <div className="user-information mt-3 text-sm">
        {checkIfEmailEmpty() ? `${user.email}` : ''}
        {checkIfAddressEmpty() ? `  |  ${user.address}` : ''}
        {checkIfPhoneEmpty() ? `  |  ${user.phone}` : ''}
      </div>
    </div>
  );
};

export default GeneralInformationPreview;
