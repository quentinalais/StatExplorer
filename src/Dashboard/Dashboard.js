import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TaskReminder from './TaskReminder';
import Inflation from './Inflation';


export const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Task Reminder</Tab>
          <Tab> ONS Datasets</Tab>
          
        </TabList>

        <TabPanels>
          <TabPanel>
            <TaskReminder />
          </TabPanel>
          <TabPanel>
            <Inflation />
          </TabPanel>
        
        </TabPanels>
      </Tabs>
    </div>
  );
};
