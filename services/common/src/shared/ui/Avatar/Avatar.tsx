import { FunctionComponent } from "react";
import { Avatar as AvatarMui, AvatarProps as AvatarMuiProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { avatarExtraSmallPx, avatarSmallPx, avatarMediumPx, avatarLargePx, avatarExtraLargePx } from "../../styles/sizes";
import { Person } from "@material-ui/icons";

interface AvatarProps {
  src?: string | null;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const useStyles = makeStyles({
  xs: {
    margin: 0,
    width: avatarExtraSmallPx,
    height: avatarExtraSmallPx,
  },
  sm: {
    margin: 0,
    width: avatarSmallPx,
    height: avatarSmallPx,
  },
  md: {
    margin: 0,
    width: avatarMediumPx,
    height: avatarMediumPx,
  },
  lg: {
    margin: 0,
    width: avatarLargePx,
    height: avatarLargePx,
  },
  xl: {
    margin: 0,
    width: avatarExtraLargePx,
    height: avatarExtraLargePx,
  },
});

const Avatar: FunctionComponent<AvatarProps & Omit<AvatarMuiProps, "src">> = ({ size = "sm", src = undefined, ...props }) => {
  const classNames = useStyles();

  if (!src) {
    return (
      <AvatarMui className={classNames[size]}>
        <Person style={{ width: "100%", height: "100%" }} />
      </AvatarMui>
    );
  }

  return <AvatarMui className={classNames[size]} src={src} {...props} />;
};

export default Avatar;
