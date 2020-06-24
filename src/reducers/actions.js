import persister from "../middleware/persister";

export async function acAddNote(pData) {
  await persister({
    type: "ADD_NOTE",
    payload: pData,
  });
}
