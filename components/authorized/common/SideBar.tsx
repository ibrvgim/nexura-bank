import {
  HomeIcon,
  CreditCardIcon,
  ListBulletIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import SideItem from "./SideItem";

const routes = [
  {
    path: "/home",
    title: "Home",
    icon: <HomeIcon />,
  },

  {
    path: "/transactions",
    title: "Transactions",
    icon: <ListBulletIcon />,
  },

  {
    path: "/cards",
    title: "Debit Cards",
    icon: <CreditCardIcon />,
  },

  {
    path: "/payments",
    title: "Payments",
    icon: <ArrowsRightLeftIcon />,
  },
];

function SideBar() {
  return (
    <div>
      <ul className="flex flex-col gap-1.5 pr-20">
        {routes.map((route) => (
          <li key={route.path}>
            <SideItem path={route.path} icon={route.icon}>
              {route.title}
            </SideItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
