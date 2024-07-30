interface ProfilePreviewTypes {
  profile: string;
}

export default function ProfilePreview({ profile }: ProfilePreviewTypes) {
  return (
    <>
      {profile && (
        <div className='mt-6 w-full px-12'>
          <div className='font-bold text-lg'>
            <h1 className='antialiased font-sans'>PROFILE</h1>
            <hr className='w-full border-[0.12rem] border-gray-700 rounded-lg' />
          </div>
          <div className='leading-5 font-serif mt-3'>{profile}</div>
        </div>
      )}
    </>
  );
}
