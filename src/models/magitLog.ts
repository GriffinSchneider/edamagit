import { Commit, Ref } from "../typings/git";

export interface MagitLog {
  commits: Commit[];
  ref: Ref;
}