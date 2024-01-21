import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const nav = [
  { to: "/recoil", title: "Recoil" },
  { to: "/msw", title: "MSW" },
  { to: "/rq", title: "React Query" },
  { to: "/dialog", title: "Dialog" },
  { to: "/util", title: "Util" },
  { to: "/test", title: "TestPage" },
];

const Header = () => {
  return (
    <Tabs>
      <TabList>
        {nav.map((item) => (
          <Link key={item.to} to={item.to}>
            <Tab>{item.title}</Tab>
          </Link>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Header;
