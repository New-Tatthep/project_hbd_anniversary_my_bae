// src/app/pages/Home.js

import { Button, Card, Typography } from 'antd';
import Gift from '../components/Gift';
const { Title, Paragraph } = Typography;

// Default export for HomePage component
const HomePage = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32" > 
     <Gift/>
    </div>
  );
};

export default HomePage; // Ensure this is a default export
