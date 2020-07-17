import axios from "axios";
import { uuid } from "uuidv4";

import {
  PROFILE_UPDATED,
  CLEAR_PROFILE_PIC,
  PROFILE_PIC_UPDATED,
  PROFILE_ERROR,
} from "./types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const res = await axios.patch("/api/profile", formData, config);
    console.log(res.data.profile);
    dispatch({
      type: PROFILE_UPDATED,
      payload: res.data.profile,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateProfilePic = (file) => async (dispatch, getState) => {
  const folderName = "hendrix/user";
  const fileName = `${uuid()}`;
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
    console.error(error);
  }
};
