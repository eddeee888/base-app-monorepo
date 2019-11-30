import { css } from 'emotion';
import React from 'react';
import Button from 'common/components/Button';
import Logo from 'common/components/Logo';
import { useViewer } from 'common/components/ViewerProvider';
import { borderColor, primaryBackgroundColor } from 'common/styles/color';
import { breakpoints, mediaQuery } from 'common/styles/media';
import { headerHeight } from 'common/styles/size';
import { routes } from 'common/pathing';
import LoggedInMenu from 'common/components/Header/LoggedInMenu';

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
  const { viewer } = useViewer();
  return (
    <header className={headerClassName}>
      <div className={headerContentClassName}>
        <div className={logoWrapperClassName}>
          <routes.home.Link params={{}}>
            <Logo className={logoClassName} />
          </routes.home.Link>
        </div>

        <div className={actionWrapperClassName}>
          {!viewer && (
            <>
              <routes.signup.Link params={{}}>
                <Button variant="outlined">Sign up</Button>
              </routes.signup.Link>
              <routes.login.Link params={{}} color="secondary">
                <Button variant="outlined">Log in</Button>
              </routes.login.Link>
            </>
          )}
          {viewer && <LoggedInMenu viewer={viewer} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
