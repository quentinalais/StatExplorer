import React from 'react'
import {
  Box,
  Flex,
  VStack,
  Text,
  chakra,
  Divider,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Grid,
  GridItem,
  Container,
  Center
} from '@chakra-ui/react';


function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel  fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        <Center>{stat}</Center>
      </StatNumber>
    </Stat>
  );
}

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};



export const Home = () => {
  return (
      <div>
       <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        How is the <Text as='span' color="teal"> UK </Text> going?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Employment Rate'} stat={'75.5%'} />
        <StatsCard title={'Inflation'} stat={'8.8%'} />
        <StatsCard title={'GDP'} stat={'0.2%'} />
      </SimpleGrid>
    </Box>
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Data Source: <Text as='span' color="teal"> ONS </Text>
            </chakra.h2>
            {/* <Button colorScheme="green" size="md">
              Call To Action
            </Button> */}
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              All data used for this project is extracted from the API provided by the <Text target="_blank" href="https://www.ons.gov.uk/" as='a' color="teal"> Office for National Statistics  </Text>(ONS).
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Business, industry and trade'}
          text={'Short text describing one of you features/service'}
        />
        <Feature
          heading={'Economy'}
          text={'Short text describing one of you features/service'}
        />
        <Feature
          heading={'Employment and labour market'}
          text={'Short text describing one of you features/service'}
        />
        <Feature
          heading={'People, population and community'}
          text={'Short text describing one of you features/service'}
        />
      </Grid>
    </Box>
   
      </div>
        
  )
}
