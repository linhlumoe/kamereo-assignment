import React, { memo, useEffect } from "react";

const StoreProfile = props => {
  const { getProfile, storeProfile } = props;
  useEffect(() => {
    getProfile(123);
  }, [getProfile]);
  console.log("storeProfile: ", storeProfile);

  return <div>long Content . . . .long</div>;
};

export default memo(StoreProfile);
