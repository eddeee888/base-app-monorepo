import { css } from 'emotion';
import React, { useContext } from 'react';

import Button from 'common/components/Button';
import Link from 'common/components/Link';
import Logo from 'common/components/Logo';
import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';
import { borderColor, primaryBackgroundColor } from 'common/styles/color';
import { breakpoints, mediaQuery } from 'common/styles/media';
import { headerHeight } from 'common/styles/size';

const headerClassName = css`
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  top: 0px;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primaryBackgroundColor};
  border-bottom: 1px solid ${borderColor};

  ${mediaQuery.md} {
    padding: 0 2rem;
  }
`;

const headerContentClassName = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.md} {
    max-width: ${breakpoints.lg}px;
  }
`;

const logoWrapperClassName = css`
  display: flex;
  align-items: center;
`;

const actionWrapperClassName = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding-left: 0.5em;
  }
`;

const logoClassName = css`
  display: block;
`;

const Header: React.FunctionComponent<{}> = () => {
  const { viewer } = useContext(ViewerContext);
  return (
    <header className={headerClassName}>
      <div className={headerContentClassName}>
        <div className={logoWrapperClassName}>
          <Link to={linkgen(Paths.home)}>
            <Logo className={logoClassName} />
          </Link>
        </div>

        <div className={actionWrapperClassName}>
          {!viewer && (
            <>
              <Link to={linkgen(Paths.signup)}>
                <Button variant="outlined">Sign up</Button>
              </Link>
              <Link to={linkgen(Paths.login)} themeColor="secondary">
                <Button variant="outlined">Log in</Button>
              </Link>
            </>
          )}
          {viewer && (
            <>
              <Link to={linkgen(Paths.dashboard)}>
                <Button variant="text">Dashboard</Button>
              </Link>
              <Link to={linkgen(Paths.logout)}>
                <Button variant="text">Logout</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
