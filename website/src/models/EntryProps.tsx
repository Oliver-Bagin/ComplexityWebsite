import { Link } from "./Link";

export type EntryProps = {
  title: string;
  week: string;
  image?: string;
  body: string;
  date?: Date;
  links?: Link[];
};
