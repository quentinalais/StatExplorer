import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ModalTask from "./ModalTask";
import { AiOutlineDelete , AiOutlineEdit} from 'react-icons/ai';
import useLocalStorage  from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';
import {
    ListItem,
    UnorderedList,
    Box,
    Flex,
    Center,
    Text,
  } from '@chakra-ui/react'


function TaskReminder() {
  const [data, setdata] = useLocalStorage('data',[])  

  const addTask =(task_name)=>{
    var current = {name : task_name, id: uuidv4()}
    if(data){
        var data_copy = [...data]
        data_copy.push(current)
        setdata(data_copy)
    }
    else{
        setdata([current])
    }
  }

  const deleteTask = (task_id) =>{
    setdata(data.filter(item=>item.id !== task_id))
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
          <MyTasks data={data} deleteTask={deleteTask} />

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


const MyTasks = ({data, deleteTask }) => {
    if( data === null )return <div></div>
    if( data === [] )return <div></div>

    return(
        <div>
            <UnorderedList style={{listStyle:'none'}}>
            {data.map((task,id)=>{
                return(
                    <ListItem key={id}><MyBox task = {task} deleteTask={deleteTask}/></ListItem>
                )
            })}
        </UnorderedList>
        </div>
    )
}


const MyBox = ({ task,deleteTask}) => {
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      bg="blue.600"
      w="100%"
      p={4}
      color="white"
    >
      <Flex color="white">
        <Center w="200px">
          <Text>{task.name}</Text>
        </Center>
        <Center flex="1">
          <div className="container flex mycontainer" onClick={() => alert("Edit")}>
            <AiOutlineEdit
              size="20px"
              onMouseOver={({ target }) => (target.style.color = "black")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </div>
            
        </Center>
        <Center flex="1">
            <div className="container flex mycontainer" onClick={() => deleteTask(task.id)}>
              <AiOutlineDelete
                className="justify-content-center"
                size="20px"
                onMouseOver={({ target }) => (target.style.color = "black")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </div>
        </Center>
      </Flex>
    </Box>
  );
};