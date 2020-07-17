import axios from "axios";

import { PROFILE_PIC_UPDATED, PROFILE_ERROR } from "./types";

export const updateProfilePic = (file) => async (dispatch, getState) => {
  dispatch({
    type: PROFILE_PIC_UPDATED,
    payload:
      "https://haiyanghongnewbucket.s3-us-west-2.amazonaws.com/hendrix/user/default-user.png",
  });
  const folderName = "hendrix/user";
  const fileName = getState().auth.user.id;
  const fileType = file.type;
  try {
    const res = await axios.patch("/api/profile/photo", {
      fileName: `${folderName}/${fileName}`,
      fileType: fileType,
    });
    const { signedRequest, url } = res.data;
    await fetch(signedRequest, {
      method: "PUT",
      headers: {
        "Content-Type": fileType,
      },
      body: file,
    });
    dispatch({
      type: PROFILE_PIC_UPDATED,
      payload: url,
    });
  } catch (error) {
    console.log(error);
  }
};
