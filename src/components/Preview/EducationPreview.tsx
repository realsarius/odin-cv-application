/* eslint-disable react/jsx-one-expression-per-line */
import { Education } from '../../types';

interface EducationPreviewProps {
  education: Education[];
}

const EducationPreview = ({ education }: EducationPreviewProps) => {
  const printEducations = () => {
    const data = education.map((ed) => (
      <li key={ed.id} className="flex">
        <p className="font-bold font-sans antialiased">{ed.school}</p>,{' '}
        <p className="ml-1 italic">{ed.degree}</p>
      </li>
    ));

    return <ul className="flex flex-col gap-2">{data}</ul>;
  };
  return (
    <div className="mt-6 w-full">
      <div className="font-bold text-lg">
        <h1 className="antialiased font-sans">EDUCATION</h1>
        <hr className="w-full border-[0.12rem] border-gray-700 rounded-lg" />
      </div>
      <div className="leading-5 font-serif mt-3">{printEducations()}</div>
    </div>
  );
};

export default EducationPreview;
