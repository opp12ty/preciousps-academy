import type { SubjectPack } from "./types";
import { basicScience } from "./basic-science";
import { basicTechnology } from "./basic-technology";
import { civicEducation } from "./civic-education";
import { english } from "./english";
import { mathematics } from "./mathematics";
import { socialStudies } from "./social-studies";

export const ALL_PACKS: SubjectPack[] = [mathematics, english, basicScience, basicTechnology, socialStudies, civicEducation];
