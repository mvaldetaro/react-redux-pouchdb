import { setItem } from "../middleware/persister";

export async function acAddNote(pData) {
  await setItem({
    type: "ADD_NOTE",
    payload: pData,
  });
}
