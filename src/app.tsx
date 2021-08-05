import React, { useEffect, useState } from 'react';
import { httpGet } from './httpRequest';

function App() {
  const [data, setData] = useState<[]>([] as any);

  useEffect(() => {
    httpGet('https://reqres.in/api/users?page=2')
      .then((res: any) => {
        console.log(res.data.data);
        setData(res.data.data || []);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map(o => {
        return (
          <div>
            {o.first_name} {o.last_name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
