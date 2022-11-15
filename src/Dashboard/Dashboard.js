import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TaskReminder from './TaskReminder';
import ONSDatasets from './Datasets';


export const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab  _selected={{ color: 'teal', fontWeight:'bold'}}> Datasets</Tab>
          <Tab _selected={{ color: 'teal', fontWeight:'bold'}}>Task Reminder</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ONSDatasets />
          </TabPanel>
          <TabPanel>
            <TaskReminder />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
