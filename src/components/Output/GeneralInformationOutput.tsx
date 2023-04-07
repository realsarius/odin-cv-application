/* eslint-disable react/jsx-one-expression-per-line */
import emailPng from '../../assets/mail-inbox-app.png';
import phonePng from '../../assets/phone-call.png';
import addressPng from '../../assets/location.png';

interface UserProps {
  name: string;
  job: string;
  email: string;
  phone: string;
  address: string;
}

interface GeneralInformationProps {
  user: UserProps;
  showEditState: (value: boolean) => boolean;
}

const GeneralInformation = ({
  user,
  showEditState,
}: GeneralInformationProps) => {
  const showEditInfo = () => {
    showEditState(true);
  };

  const checkIfEmailEmpty = () => {
    if (user.email.trim().length === 0) {
      return true;
    }
    return false;
  };

  const checkIfPhoneEmpty = () => {
    if (user.phone.trim().length === 0) {
      return true;
    }
    return false;
  };

  const checkIfAddressEmpty = () => {
    if (user.address.trim().length === 0) {
      return true;
    }
    return false;
  };

  return (
    <div
      className="border-solid rounded-2xl border-gray-200 border-2 p-5 cursor-pointer flex flex-col gap-3 bg-[#ffffff] shadow-md"
      onClick={showEditInfo}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          showEditInfo();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <p className="text-lg font-bold">{user.name}</p>
      <div className="text-sm flex items-center gap-2">
        <img src={emailPng} className="w-5" alt="email-icon" />{' '}
        {checkIfEmailEmpty() ? (
          <p className="text-gray-500">Email</p>
        ) : (
          <p>{user.email}</p>
        )}
      </div>
      <div className="text-sm flex items-center gap-2">
        <img src={phonePng} className="w-5" alt="email-icon" />{' '}
        {checkIfPhoneEmpty() ? (
          <p className="text-gray-500">Phone</p>
        ) : (
          <p>{user.phone}</p>
        )}
      </div>
      <div className="text-sm flex items-center gap-2">
        <img src={addressPng} className="w-5" alt="email-icon" />{' '}
        {checkIfAddressEmpty() ? (
          <p className="text-gray-500">Address</p>
        ) : (
          <p>{user.address}</p>
        )}
      </div>
    </div>
  );
};

export default GeneralInformation;
