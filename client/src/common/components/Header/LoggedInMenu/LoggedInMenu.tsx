import React from 'react';
import { routes } from 'common/pathing';
import {
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Paper
} from '@material-ui/core';
import Avatar from 'common/components/Avatar';
import { Viewer } from 'common/components/ViewerProvider';
import A from 'common/components/A';

interface LoggedInMenuProps {
  viewer: Viewer;
}

const LoggedInMenu: React.FunctionComponent<LoggedInMenuProps> = ({
  viewer
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLAnchorElement>(null);

  const handleToggle = (
    event: React.MouseEvent<EventTarget, MouseEvent>
  ): void => {
    event.preventDefault();
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <A ref={anchorRef} onClick={handleToggle} href="#">
        <Avatar
          src={viewer.avatar}
          size="sm"
          aria-controls="menu-list-grow"
          aria-haspopup="true"
        />
      </A>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>
                    <routes.me.Link params={{}}>account</routes.me.Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <routes.logout.Link params={{}}>log out</routes.logout.Link>
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
