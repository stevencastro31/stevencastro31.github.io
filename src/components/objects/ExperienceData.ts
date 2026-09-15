import type { ExperienceInfo } from "../types/ExperienceInfo";
import { TechnicalSkill } from "../enums/TechnicalSkill";

export const EXPERIENCE_DATA: ExperienceInfo[] = [
    {
        role: "Clerical Worker",
        color: "1c59b4",
        comapany: "Eastworld Sales Philippines",
        year: "APR 2019 - AUG 2019",
        skills: [TechnicalSkill.MSExcel],
        icon: "icons/eastworld.jpg",
        description: "Processed purchase orders and managed routine data entry tasks. Provided general administrative support to assist team operations.",
    }, {
        role: "Dialogflow Developer (Intern)",
        color: "006936",
        comapany: "TE3D House - AdRIC Research Center",
        year: "SEP 2023 - DEC 2023",
        skills: [TechnicalSkill.JavaScript, TechnicalSkill.NodeJS, TechnicalSkill.Python, TechnicalSkill.Dialogflow, TechnicalSkill.Git, TechnicalSkill.Express, TechnicalSkill.FastAPI, TechnicalSkill.Firebase],
        icon: "icons/dlsu.png",
        description: "Upgraded Dialogflow CX conversational flows, tuned Python (FastAPI) backends, and automated routine workflows using JavaScript for maximum efficiency.",
    }, {
        role: "Support Developer",
        color: "f4731f",
        comapany: "Developer Soft and Technical Support SEA Inc.",
        year: "JUN 2024 - JUN 2026",
        skills: [TechnicalSkill.CS, TechnicalSkill.DevExpress, TechnicalSkill.NET, TechnicalSkill.NETCore, TechnicalSkill.Git, TechnicalSkill.WPF, TechnicalSkill.WindowForms, TechnicalSkill.Docker],
        icon: "icons/devsoft.jpg",
        description: "Analyzed customer requirements to resolve complex desktop and web technical issues using DevExpress components and custom code samples. Developed deep technical expertise in charting, mapping, and Office File APIs to deliver support and high-impact solutions. Actively contributed to beta testing upcoming features for core Microsoft Office-related technologies, including RTF, Spreadsheet, and PDF processing.",
    },
];