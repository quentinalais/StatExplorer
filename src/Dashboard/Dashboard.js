import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ONSDatasets from './Datasets';
import Inflation from './Inflation';



export const Dashboard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab  _selected={{ color: 'teal', fontWeight:'bold'}}> Datasets</Tab>
          <Tab _selected={{ color: 'teal', fontWeight:'bold'}}>UK Inflation</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ONSDatasets key="1"/>
          </TabPanel>
          <TabPanel>
            <Inflation key="2" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
