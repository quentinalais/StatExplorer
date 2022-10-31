import React, { useState } from "react";
import { Grid, GridItem, Button} from "@chakra-ui/react";
import ModalTask from "./ModalTask";
import { AiOutlineDelete , AiOutlineEdit} from 'react-icons/ai';

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Box,
    Flex,
    Center,
    Text,
    Square
  } from '@chakra-ui/react'

function TaskReminder() {
  const [data, setdata] = useState([])  

  const addTask =(task_name)=>{
    var current = {name : task_name}
    if(data){
        var data_copy = [...data]
        data_copy.push(current)
        setdata(data_copy)
    }
    else{
        setdata([current])
    }
  }

  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"450px 1fr"}
        h="200px"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2"  area={"header"}>
        <ModalTask addTask = {addTask} />
         
        </GridItem>
        <GridItem pl="2"  area={"nav"}>
          Tasks
          <br/>
          <MyTasks data={data}/>

        </GridItem>
        <GridItem pl="2"  area={"main"}>
          
        </GridItem>
        <GridItem pl="2"  area={"footer"}>
          
        </GridItem>
      </Grid>
    </div>
  );
}

export default TaskReminder;


const MyTasks = ({data}) => {
    if( data === null )return <div></div>
    if( data === [] )return <div></div>

    return(
        <div>
            <UnorderedList style={{listStyle:'none'}}>
            {data.map((task,id)=>{
                return(
                    <ListItem key={id}><MyBox text={task.name}/></ListItem>
                )
            })}
        </UnorderedList>
        </div>
    )
}


const MyBox = ({ text }) => {
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      bg="orange"
      w="100%"
      p={4}
      color="white"
    >
      <Flex color="white">
        <Center w="200px" >
          <Text>{text}</Text>
        </Center>
        <Center flex="1" >
          <Text><AiOutlineEdit 
                    size="20px"
                    onMouseOver={({target})=>target.style.color="black"} 
                    onMouseOut={({target})=>target.style.color="white"}
          /></Text>
        </Center>
        <Center flex="1" >
          <Text><AiOutlineDelete 
          size="20px"
          onMouseOver={({target})=>target.style.color="black"} 
          onMouseOut={({target})=>target.style.color="white"}
          /></Text>
        </Center>
        
      </Flex>
    </Box>
  );
};