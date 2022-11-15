import { Box, Divider, Heading, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react'
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

  useEffect(() => {
    var isRendered = true;
    axios.get(ONS_API).then((response) => {
      if (isRendered) {
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
  }, []);

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
  return (<div>
     <Text fontSize='2xl' as='b'> Datasets</Text>
     <br/>
     <Wrap spacing='15px' >
        {datasets.map((element,id)=>{
        return(<WrapItem>
            <Feature
            title={element.title}
            desc={element.description}
            keyword={element.keywords}
            release={element.next_release}
            release_frequency={element.release_frequency}
            frequencies={frequencies}
          />
        </WrapItem>
            
        )
        })}
    </Wrap>
  </div>
  )
}

export default ONSDatasets;

function Feature({ title, desc, keyword,release, frequencies, release_frequency, ...rest }) {
    const Keywords = ()=>{
        if(!keyword) return <div></div>
        return(
            <Wrap spacing='5px'>
           
                {keyword.map((word,id_keyword)=>{
                    return( <WrapItem key={id_keyword}>
                        <Tag> {word}</Tag>
                        
                        
                        </WrapItem>
                    )
                })}
            
        </Wrap> 
        )
    }

    return (
      <Box p={5} shadow="md" h="100%" w="500px" borderWidth="1px" {...rest}>
        <Heading mb={2} fontSize="xl">
          {title}
        </Heading>
        <Keywords />
        <Text mt={2} noOfLines={2} maxWidth="400px">
          {desc}
        </Text>
        <Divider m={2} size="l" />
        <Box display="flex" alignItems="baseline">
          <Text as="b">Next release: </Text>
          {release}
          <Text ml='2' as="b">Frequency: </Text>
          <Tag ml='2' colorScheme={frequencies[release_frequency]}>{release_frequency}</Tag>
        </Box>
      </Box>
    );
  }