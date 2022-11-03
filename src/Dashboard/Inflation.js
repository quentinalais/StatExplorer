import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {  Box, Heading, Text, Wrap, WrapItem, Tag, Divider} from '@chakra-ui/react'


const ONS_API = 'https://api.beta.ons.gov.uk/v1/datasets'

function Inflation() {
  const [datasets, setdatasets] = useState(null)

  useEffect(() => {
    axios.get(ONS_API).then(response=>{
        setdatasets(response.data.items)
    })
  }, [])
  
  console.log(datasets)

  if (!datasets) return null;
  return (<div>
     <div>ONS Datasets</div>
     <br/>

     <Wrap spacing='15px' >
        {datasets.map((element,id)=>{
        return(<WrapItem>
            <Feature
            title={element.title}
            desc={element.description}
            keyword={element.keywords}
            release={element.next_release}
          />
        </WrapItem>
            
        )
        })}
     
    
    </Wrap>
  </div>
   

    
  )
}

export default Inflation

function Feature({ title, desc, keyword,release, ...rest }) {
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
      <Box p={5} shadow='md'h='100%' w='500px' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Keywords />
        
        
                        
        <Text mt={2} noOfLines={2} maxWidth='400px'>{desc}</Text>
        <br/>
        <Divider size='l' />
        <b className="text-secondary">Next release:</b> {release}
      </Box>
    )
  }