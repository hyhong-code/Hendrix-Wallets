import axios from "axios";
import { uuid } from "uuidv4";

import { PROFILE_UPDATED, PROFILE_PIC_UPDATED, PROFILE_ERROR } from "./types";
import { createToast } from "../actions/toastActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const res = await axios.patch("/api/profile", formData, config);
    dispatch({
      type: PROFILE_UPDATED,
      payload: res.data.profile,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: PROFILE_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const updateProfilePic = (file) => async (dispatch, getState) => {
  const folderName = `hendrix/user/${getState().auth.user.id}`;
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
    // console.error(error.response);
    dispatch({ type: PROFILE_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};
