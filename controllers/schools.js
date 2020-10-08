import { pool } from '../database';

const getList = async (req, res, next) => {
  try {
    const schoolData = await pool.query('SELECT * FROM schools');
    
    res.status(500).send({message: 'Data fetched successfully', data: schoolData });
  } catch (err) {
    res.status(500).send({message: 'Internal server error.'});
  }
});
