import { TechnicalSkill } from "../enums/TechnicalSkill"

export type ExperienceInfo = {
    role: string,
    color: string,
    comapany: string,
    year: string,
    skills: TechnicalSkill[],
    icon: string,
    description: string,
};