# react-ts-axios

httpRequest.ts

```js
const axios = require('axios');

export function httpGet(url: string) {
  debugger;
  return axios.get(url);
}

export function httpPost(url: string, args: any) {
  return axios({
    method: 'post',
    url,
    data: args
  });
}

export function httpDelete(url: string) {
  return axios.delete(url);
}
```

app.tsx

```js
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
```
