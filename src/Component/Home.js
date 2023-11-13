import React, { useState } from 'react'
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
import { useEffect } from 'react';
import axios from 'axios';

const ONS_WEBSITE = "https://www.ons.gov.uk"


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

export const Home = () => {
  const [data_inflation, setdata_inflation] = useState(null)
  const [data_employment, setdata_employment] = useState(null)
  const [data_gdp, setdata_gdp] = useState(null)
  

  useEffect(() => {
    axios.get(ONS_WEBSITE+"/economy/inflationandpriceindices/timeseries/l55o/mm23/data").then(resp=>{
      setdata_inflation((resp.data['months'].slice(-1)[0]))
    }) 
  }, [])

  useEffect(() => {
    axios.get(ONS_WEBSITE+"/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/timeseries/lf24/lms/data").then(resp=>{
      setdata_employment((resp.data['months'].slice(-1)[0]))
    })
    
    axios.get(ONS_WEBSITE+"/economy/grossdomesticproductgdp/timeseries/ihyq/pn2/data").then(resp=>{
      setdata_gdp((resp.data['quarters'].slice(-1)[0]))
    })
  }, [])
  

  
  return (
      <div>
       <Box maxW="7xl" mx={'auto'} pt={100} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        How is the <Text as='span' color="teal"> UK </Text> going?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={`Inflation ${data_inflation && data_inflation.label}`} stat={`${data_inflation && data_inflation.value}%`} />
        <StatsCard title={`Employment Rate ${data_employment && data_employment.label}`} stat={`${data_employment && data_employment.value}%`} />
        <StatsCard title={`GDP ${data_gdp && data_gdp.label}`} stat={`${data_gdp && data_gdp.value}%`} />
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
    </Box>
   
      </div>
        
  )
}
