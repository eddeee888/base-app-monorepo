import { FunctionComponent, useState, useRef, MouseEvent, KeyboardEvent } from "react";
import { Popper, Grow, ClickAwayListener, MenuList, MenuItem, Paper } from "@material-ui/core";
import Avatar from "~/common/shared-ui/Avatar";
import { Viewer } from "~/common/components/ViewerProvider";
import AnchorButton from "~/common/shared-ui/AnchorButton";
import { LinkMe, LinkLogout } from "~/routes";

interface LoggedInMenuProps {
  viewer: Viewer;
}

const LoggedInMenu: FunctionComponent<LoggedInMenuProps> = ({ viewer }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (event: any): void => {
    event.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<EventTarget>): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: KeyboardEvent): void => {
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
