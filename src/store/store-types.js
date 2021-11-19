export const actionTypes = {
  Login: "Login",
  Registration: "Registration",
  FindUserId: "FindUserId",

  FindUserJournalId: "FindUserJournalId",
  PullJournal: "PullJournal",
  PushJournal: "PushJournal",
  InstructJournalSync: "InstructJournalSync",
};

export const mutationTypes = {
  IsLoading: "IsLoading",
  SetUserId: "SetUserId",
  SetUserJournalId: "SetUserJournalId",
  SetActionJournalSync: "SetActionJournalSync",
  AppendModifiedJournals: "AppendModifiedJournals",
  ClearModifiedJournals: "ClearModifiedJournals",
};
