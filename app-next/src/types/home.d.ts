export interface SkillData {
  name:string;
  projects:number;
  time:string;
  icon:{dark:string, light:string};
}

export interface ProjectData{
  name:string;
  version:string;
  skills:string[];
  icon:{dark:string, light:string};
}