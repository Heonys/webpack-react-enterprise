import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

const Main = () => {
  return (
    <Box>
      <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
        <Stack>
          <CardBody>
            <Heading size="md">webpack-react-enterprise</Heading>
            <Text py="1">
              &quot;webpack-react-enterprise&quot;는 웹팩(Webpack)을 사용하여 React 어플리케이션을
              구축하기 위한 저장소입니다.
            </Text>
            <Text py="1">
              웹팩을 직접 다루면서 동작원리와 설정 방법의 이해도를 높이고 필요한 모든 요소를 갖춘
              React 애플리케이션 개발하는 것을 목표로 합니다
            </Text>
            <Text py="1">
              이를 통해 React 프로젝트에 필요한 모든 요소를 완전히 제어하면서, 더 많은 유연성과
              커스터마이징 가능성을 제공합니다.
            </Text>
          </CardBody>

          <CardFooter>
            <Button colorScheme="linkedin" variant="solid">
              <Link href="https://github.com/Heonys/webpack-react-enterprise" isExternal>
                Github
              </Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};

export default Main;
