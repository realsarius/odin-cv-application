export interface EducationProps {
  uuid: string;
  school: string;
  degree: string;
  city: string;
  country: string;
}

export interface EducationContextValue {
  educations: EducationProps[];
  setEducations: React.Dispatch<React.SetStateAction<EducationProps[]>>;
}

export interface PersonalProjectsProps {
  projectUUID: string;
  projectTitle: string;
  projectSubtitle: string;
  projectCity: string;
  projectCountry: string;
  projectDescription: string;
}

export interface PersonalProjectsContextValue {
  projects: PersonalProjectsProps[];
  setProjects: React.Dispatch<React.SetStateAction<PersonalProjectsProps[]>>;
}

export interface PersonalDetailsProps {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
}

export interface PersonalDetailsContextValue {
  personalDetails: PersonalDetailsProps;
  setPersonalDetails: React.Dispatch<
    React.SetStateAction<PersonalDetailsProps>
  >;
}
