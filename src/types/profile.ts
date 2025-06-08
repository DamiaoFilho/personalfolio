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
