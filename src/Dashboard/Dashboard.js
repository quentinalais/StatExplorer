import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TaskReminder from './TaskReminder';


export const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Task Reminder</Tab>
          <Tab> TBD Project</Tab>
          
        </TabList>

        <TabPanels>
          <TabPanel>
            <TaskReminder />
          </TabPanel>
          <TabPanel>
            <p>This is a placeholder for a new project to be added. </p>
          </TabPanel>
        
        </TabPanels>
      </Tabs>
    </div>
  );
};
