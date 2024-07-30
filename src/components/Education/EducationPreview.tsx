interface EducationTypes {
  educations: Array<{
    uuid: string;
    school: string;
    degree: string;
    city: string;
    country: string;
  }>;
}

export default function EducationPreview({ educations }: EducationTypes) {
  return (
    <div className='mt-6 w-full px-12'>
      <div className='font-bold text-lg'>
        <h1 className='antialiased font-sans'>EDUCATION</h1>
        <hr className='w-full border-[0.12rem] border-gray-700 rounded-lg' />
      </div>
      <ul className='leading-5 font-serif mt-3 flex flex-col gap-2'>
        {educations &&
          educations.map((education) => {
            return (
              <li className='flex flex-col' key={education.uuid}>
                <h1 className='font-bold'>{education.school}</h1>
                <p className='italic'>{education.degree}</p>
                <p>
                  {education.city}, {education.country}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
