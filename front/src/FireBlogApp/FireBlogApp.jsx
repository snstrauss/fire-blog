import LocalisationProvider from "./contexts/LocalisationProvider";
import RoutesProvider from "./contexts/routesProvider";

export default function FireBlogApp() {
  return (
    <LocalisationProvider>
      <RoutesProvider />
    </LocalisationProvider>
  );
}
