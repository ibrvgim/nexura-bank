import {
  HomeIcon,
  CreditCardIcon,
  UserGroupIcon,
  ListBulletIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import SideItem from "./SideItem";

const personalAccountRoutes = [
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

const businessAccountRoutes = [
  {
    path: "/business-account/home",
    title: "Home",
    icon: <HomeIcon />,
  },

  {
    path: "/business-account/transactions",
    title: "Transactions",
    icon: <ListBulletIcon />,
  },

  {
    path: "/business-account/team",
    title: "Team",
    icon: <UserGroupIcon />,
  },

  {
    path: "/business-account/payments",
    title: "Payments",
    icon: <ArrowsRightLeftIcon />,
  },
];

function SideBar({
  isBUsinessAccount = false,
}: {
  isBUsinessAccount?: boolean;
}) {
  const routes = isBUsinessAccount
    ? businessAccountRoutes
    : personalAccountRoutes;

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
