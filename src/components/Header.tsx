import { Link, useLocation } from "react-router-dom";
import { Tabs, TabList, Tab, Box, Stack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

const nav = [
  { tabIndex: 0, to: "/", title: "Main" },
  { tabIndex: 1, to: "/recoil", title: "Recoil" },
  { tabIndex: 2, to: "/msw", title: "MSW" },
  { tabIndex: 3, to: "/rq", title: "React Query" },
  { tabIndex: 4, to: "/dialog", title: "Dialog" },
  { tabIndex: 5, to: "/todo", title: "Todo" },
  { tabIndex: 6, to: "/profile", title: "Profile" },
];

const Header = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { profile, login, logout } = useAuth();

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
    <Box p="3">
      <Stack direction="row" spacing={2} align="center" justifyContent="space-between">
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            {nav.map((item) => (
              <Link key={item.tabIndex} to={item.to}>
                <Tab>{item.title}</Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
        <Stack direction="row" spacing={2}>
          {profile ? (
            <Box>
              <Stack direction="row">
                <Avatar name="Dan Abrahmov" size="sm" src={profile.picture}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Button size="sm" colorScheme="yellow" onClick={logout}>
                  로그아웃
                </Button>
              </Stack>
            </Box>
          ) : (
            <Button size="sm" colorScheme="twitter" onClick={login}>
              로그인
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
