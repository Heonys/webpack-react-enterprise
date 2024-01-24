import { Link, useLocation } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const nav = [
  { tabIndex: 0, to: "/", title: "Main" },
  { tabIndex: 1, to: "/recoil", title: "Recoil" },
  { tabIndex: 2, to: "/msw", title: "MSW" },
  { tabIndex: 3, to: "/rq", title: "React Query" },
  { tabIndex: 4, to: "/dialog", title: "Dialog" },
  { tabIndex: 5, to: "/util", title: "Util" },
  { tabIndex: 6, to: "/test", title: "TestPage" },
];

const Header = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const location = useLocation();

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const currentTab = nav.find((item) => item.to === location.pathname);
    if (currentTab) {
      setTabIndex(currentTab.tabIndex);
    }
  }, [location]);

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange}>
      <TabList>
        {nav.map((item) => (
          <Link key={item.tabIndex} to={item.to}>
            <Tab>{item.title}</Tab>
          </Link>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Header;
