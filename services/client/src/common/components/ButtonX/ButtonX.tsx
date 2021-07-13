import { routeConfig, RouteConfigProps } from "~/routes/routeConfig";
import { createButtonX } from "~/shared/ui/createButtonX";

const ButtonX = createButtonX<RouteConfigProps>(routeConfig);

export default ButtonX;
