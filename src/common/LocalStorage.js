export const LocalStorage = {
  getUserId: localStorage.getItem("user-id"),
  getUserJournalId: localStorage.getItem("user-journal-id"),
};

export const journalSync = {
  userId: LocalStorage.getUserId,
  id: LocalStorage.getUserJournalId,
};
