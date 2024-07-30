import { PersonalProjectsProps } from '../../types';

interface PersonalProjectsPreviewProps {
  personalProjects: PersonalProjectsProps[];
}

export default function PersonalProjectsPreview({
  personalProjects,
}: PersonalProjectsPreviewProps) {
  return (
    <div className='mt-6 w-full px-12'>
      <div className='font-bold text-lg'>
        <h1 className='antialiased font-sans'>PERSONAL PROJECTS</h1>
        <hr className='w-full border-[0.12rem] border-gray-700 rounded-lg' />
      </div>
      <div className='leading-5 font-serif mt-3'>
        <ul className='flex flex-col gap-4'>
          {personalProjects &&
            personalProjects.map((personalProject) => {
              return (
                <li key={personalProject.projectUUID}>
                  <h1 className='font-bold'>{personalProject.projectTitle}</h1>
                  <p>{personalProject.projectDescription}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
