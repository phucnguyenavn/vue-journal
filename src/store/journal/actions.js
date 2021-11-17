import customAxios from "../../api/client";
import { actionTypes, mutationTypes } from "../store-types";

const FIND_USER_JOURNAL_ID = "/journal/find/journal-id";

export default {
    async [actionTypes.FindUserJournalId](context,payload){
        await customAxios
          .post(FIND_USER_JOURNAL_ID, {}, {params : { userId: payload }})
          .then((res) =>
            context.commit(mutationTypes.SetUserJournalId, res.data.id)
          )
          .finally(() => context.commit(mutationTypes.IsLoading, false));   
    }
}