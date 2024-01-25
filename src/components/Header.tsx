import { Box, Stack, Button, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavigationBar from "./NavigationBar";

const Header = () => {
  const { profile, login, logout } = useAuth();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box p="3">
      <Stack direction="row" spacing={2} align="center" justifyContent="space-between">
        <NavigationBar />
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
          <Menu>
            <MenuButton size="sm" as={Button} rightIcon={<ChevronDownIcon />}>
              언어
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px" onClick={() => changeLanguage("en")}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://flagsapi.com/US/shiny/64.png"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>English</span>
              </MenuItem>
              <MenuItem minH="40px" onClick={() => changeLanguage("kr")}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://flagsapi.com/KR/shiny/64.png"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>Korean</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
