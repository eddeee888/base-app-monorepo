import React from "react";
import { Popper, Grow, ClickAwayListener, MenuList, MenuItem, Paper } from "@material-ui/core";
import AnchorButton from "common/shared-ui/AnchorButton";
import Avatar from "common/shared-ui/Avatar";
import LinkMe from "routes/me/LinkMe";
import LinkLogout from "routes/logout/LinkLogout";
import { Viewer } from "common/components/ViewerQuery";

interface LoggedInMenuProps {
  viewer: Viewer;
}

const LoggedInMenu: React.FunctionComponent<LoggedInMenuProps> = ({ viewer }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = (event: React.MouseEvent<EventTarget, MouseEvent>): void => {
    event.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <AnchorButton ref={anchorRef} onClick={handleToggle}>
        <Avatar src={viewer.avatar} size="sm" aria-controls="menu-list-grow" aria-haspopup="true" />
      </AnchorButton>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>
                    <LinkMe>Account</LinkMe>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <LinkLogout>Log out</LinkLogout>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LoggedInMenu;
