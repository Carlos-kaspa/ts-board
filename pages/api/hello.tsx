// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextPage } from 'next';

const helloAPI = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloAPI;
