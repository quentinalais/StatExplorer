import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TaskReminder from './TaskReminder';
import Inflation from './Inflation';


export const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab  _selected={{ color: 'teal', fontWeight:'bold'}}> ONS Datasets</Tab>
          <Tab _selected={{ color: 'teal', fontWeight:'bold'}}>Task Reminder</Tab>
          
        </TabList>

        <TabPanels>
          
          <TabPanel>
            <Inflation />
          </TabPanel>
          <TabPanel>
            <TaskReminder />
          </TabPanel>
        
        </TabPanels>
      </Tabs>
    </div>
  );
};
