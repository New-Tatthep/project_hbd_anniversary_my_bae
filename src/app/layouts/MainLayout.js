// src/app/layouts/MainLayout.js

import { Layout, Flex } from 'antd';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';



const MainLayout = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Navbar />
        <HomePage />
      </Layout>
    </Flex>
  )
};
export default MainLayout;
