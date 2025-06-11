export interface ProfileType {
    name: string;
    description: string;
    role: string;
    avatar: string;
}

export interface HardSkillType {
   name: string;
   src: string;
}

export interface HardSkillCategoryType {
    name: string;
    skills: HardSkillType[];
}

export interface SoftSkillType {
   name: string;
   description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  socialLinks: {
    github: string;
    linkedin: string;
    gitlab: string;
    instagram: string;
  };
};

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  src: string;
  repository: string;
  technologies: HardSkillType[]
}