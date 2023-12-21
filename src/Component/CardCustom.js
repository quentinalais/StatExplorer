import React from 'react'
import { Box, Heading, Card } from '@chakra-ui/react'


function CardCustom(props) {
  return (
    <Card>
        <Box p="4">
          <Heading color='cyan.900' as='h1' size='xl' noOfLines={1}>{props.title} </Heading>
          {props.children}
        </Box>
    </Card>
  )
}

export { CardCustom }