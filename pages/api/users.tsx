import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

interface ResponseType {
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<any> => {
  if (req.method == 'POST') {
    const { data } = req.body;
    if (!data) {
      res.status(400).json({ message: 'No data informed' });
      return;
    }
    const { db } = await connect();
    const response = await db.collection('users').insertOne(data);
    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ message: 'wrong method' });
  }
};
