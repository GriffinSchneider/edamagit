import { Commit, Branch } from '../typings/git';

export interface MagitRebasingState {
  origBranchName: string;
  ontoBranch?: Branch;
  ontoCommit: Commit;
  doneCommits: Commit[];
  currentCommit: Commit;
  upcomingCommits: Commit[];
}