// libraries
import { useState } from "react";

// styles
import {} from "./add-friend-button.styles";

// components
import CustomPrimaryButton from "../../../../components/buttons/custom-primary-button/custom-primary-button.component";
import AddFriendDialog from "../../../../components/add-friend-dialog/add-friend-dialog.component";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
        additionalStyles={additionalStyles}
      ></CustomPrimaryButton>
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
