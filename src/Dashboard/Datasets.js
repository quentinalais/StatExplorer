import { Box, Heading, Tag, Text, Wrap, WrapItem , HStack, Button, LinkBox, LinkOverlay} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ONS_API = 'https://api.beta.ons.gov.uk/v1/datasets'

const color_palette = ["orange",
"green",
"red",
"blue",
"cyan",
"pink",
"purple",
]

function ONSDatasets() {
  const [datasets, setdatasets] = useState(null)
  const [frequencies, setfrequencies] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [total, settotal] = useState(null)


  useEffect(() => {
    var isRendered = true;
    axios.get(`${ONS_API}?offset=${currentPage}`).then((response) => {
      if (isRendered) {
        settotal(response.data.total_count)
        setdatasets(
          response.data.items.map((element) => {
            if (element.release_frequency === "Annual") {
              return { ...element, release_frequency: "Annually" };
            }
            return { ...element };
          })
        );
      }
    });
    return () => {
      isRendered = false;
    };
  }, [currentPage]);

  useEffect(() => {
    if (datasets) {
      var list_unique_frequencies = [
        ...new Set(datasets.map((element) => element.release_frequency)),
      ];
      let result = {};
      list_unique_frequencies.forEach((frequency, id) => {
        result[frequency] = color_palette[id];
      });
      setfrequencies(result);
    }
  }, [datasets]);
  
  if (!datasets) return null;
  if (!frequencies) return null
  return (
    <div>
      <Text fontSize="2xl" as="b">
        {" "}
        Datasets  - Page {currentPage} out of {Math.floor(total/20)+1}
      </Text>
      <br />
      <HStack>
      <Button colorScheme='teal' variant='solid' onClick={()=>{setcurrentPage(currentPage-1)}}> Previous </Button>
      <Button colorScheme='teal' variant='solid' onClick={()=>{setcurrentPage(currentPage+1)}}> Next </Button>
      </HStack>
      <Wrap spacing="15px">
        {datasets.map((element, id) => {
          return (
            <WrapItem >
              <Feature
                element={element}
                frequencies={frequencies}
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <HStack>
      <Button colorScheme='teal' variant='solid' onClick={()=>{setcurrentPage(currentPage-1)}}> Previous </Button>
      <Button colorScheme='teal' variant='solid' onClick={()=>{setcurrentPage(currentPage+1)}}> Next </Button>

      </HStack>
    </div>
  );
}

export default ONSDatasets;

function Feature({ element, frequencies, ...rest }) {
    const Keywords = ()=>{
        if(!element.keyword) return <div></div>
        return(
            <Wrap spacing='5px'>
           
                {element.keyword.map((word,id_keyword)=>{
                    return( <WrapItem key={id_keyword}>
                        <Tag> {word}</Tag>
                        </WrapItem>
                    )
                })}
        </Wrap> 
        )
    }

    return (
      
      
      <LinkBox  p={5} shadow="md" bg='white' h="100%" w="500px" borderWidth="1px" {...rest}>
        <Heading mb={2} fontSize="xl">
        <LinkOverlay href='#'>
        {element.title}    </LinkOverlay>
          
        </Heading>
        <Keywords />
        <Text mt={2} noOfLines={2} maxWidth="400px">
          {element.description}
        </Text>
        <Box display="flex" alignItems="baseline" >
          <Text as="b">Next release: </Text>
          {element.next_release}
          <Text ml='2' as="b">Frequency: </Text>
          
          <Tag ml='2' colorScheme={frequencies[element.release_frequency]}>{element.release_frequency}</Tag>
         
        </Box>
        <Box display="flex" alignItems="baseline" >
        <Text as="b">Dataset ID: </Text>{element.id}
        </Box>
      </LinkBox>
    );
  }