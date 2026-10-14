import { Briefcase, FolderGit2, GraduationCap, Heart, House, Mail, Sparkles, UserRound, type LucideIcon } from 'lucide-react';
import { SECTION_IDS, type SectionId } from '@/types/portfolio';

export const NAV_ICONS: Record<SectionId, LucideIcon> = {
  home: House,
  about: UserRound,
  skills: Sparkles,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderGit2,
  interests: Heart,
  contact: Mail,
};

export const NAV_SECTIONS = SECTION_IDS;
