import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log('AppLayout', navigation);

  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
