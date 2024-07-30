interface PersonalDetailsProps {
  personalDetails?: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
  };
}

export default function PersonalDetailsPreview({
  personalDetails = {
    fullName: 'Your Name',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
  },
}: PersonalDetailsProps) {
  return (
    <div className='flex flex-col justify-center items-center py-8 bg-[#355c7d] text-gray-100'>
      <div className='name-section'>
        <h1 className='text-4xl font-serif font-bold'>
          {personalDetails.fullName?.trim().length > 0 ? (
            `${personalDetails.fullName}`
          ) : (
            <p className=''>Your Name</p>
          )}

          {personalDetails.jobTitle?.trim().length > 0 ? (
            <span className='text-xl italic'>, {personalDetails.jobTitle}</span>
          ) : (
            ''
          )}
        </h1>
      </div>
      <div className='user-information mt-3 text-sm'>
        {personalDetails.email?.trim().length > 0
          ? `${personalDetails.email}`
          : ''}
        {personalDetails.phone?.trim().length > 0
          ? `  •  ${personalDetails.phone}`
          : ''}
        {personalDetails.address?.trim().length > 0
          ? `  •  ${personalDetails.address}`
          : ''}
      </div>
    </div>
  );
}
