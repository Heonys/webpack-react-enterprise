import { useAuth } from "@/context/AuthContext";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

const ProfilePage = () => {
  const { profile } = useAuth();

  if (!profile) return null;

  return (
    <Box p="5">
      <Stack spacing={4} direction="column" align="center">
        <Image borderRadius="full" boxSize="150px" src={profile.picture} alt="Dan Abramov" />
        <Text>Name: {profile.name}</Text>
        <Text>Email Address: {profile.email}</Text>
      </Stack>
    </Box>
  );
};

export default ProfilePage;
