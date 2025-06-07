import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Account({gameName, tagLine}) {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/riot/account/${gameName}/${tagLine}`)
      .then(res => setAccount(res.data))
      .catch(err => setError(err.message));
  }, [gameName, tagLine]);

  if (error) return <div>Error: {error}</div>;
  if (!account) return <div>Loading account...</div>;

  return (
    <div>
      <h2>Account Info</h2>
      <pre>{JSON.stringify(account, null, 2)}</pre>
    </div>
  );
}

export default Account;