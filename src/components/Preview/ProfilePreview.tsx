interface ProfilePreviewProps {
  profile: string;
}

const ProfilePreview = ({ profile }: ProfilePreviewProps) => {
  return (
    <div className="mt-6 w-full">
      <div className="font-bold text-lg">
        <h1 className="antialiased font-sans">PROFILE</h1>
        <hr className="w-full border-[0.12rem] border-gray-700 rounded-lg" />
      </div>
      <div className="leading-5 font-serif mt-3">{profile}</div>
    </div>
  );
};

export default ProfilePreview;
