import axios from 'axios';

export const fetchBets = async () => {
  try {
    const response = await axios.get('https://nesine-case-study.onrender.com/bets');
    return response.data;
  } catch (error) {
    console.error('Error fetching bets:', error);
    return [];
  }
};
