import React from "react";
import CommonModal from "../../molecules/commonModal/CommonModal";
import SearchInput from "../../atoms/searchInput/SearchInput";
import AccountMenu from "~/components/atoms/accountMenu/AccountMenu";
import { Box } from "@mui/material";

const HeaderSidebar = () => {
  const [openLogoutModal, setOpenLogoutModal] = React.useState(false);

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "48px",
      }}
    >
      <CommonModal
        open={openLogoutModal}
        handleClose={() => setOpenLogoutModal(false)}
        heading="Are you sure you want to log out?"
        primaryButton={{
          label: "Confirm",
          // action: () => signOutClickHandler(),
          action: () => {
            console.log("logout clicked");
            setOpenLogoutModal(false);
          },
        }}
        secondaryButton={{
          label: "Cancel",
          action: () => setOpenLogoutModal(false),
        }}
      />

      <Box sx={{ flex: 2 }}></Box>

      <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <SearchInput
          value={""}
          onChange={({ target }) => {
            console.log(target.value);
          }}
        />

        <AccountMenu />
      </Box>
    </Box>
  );
};

export default HeaderSidebar;
