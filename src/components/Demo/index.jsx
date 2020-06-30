import React from "react";
import { Button } from 'antd';

import { useGloContext } from '@/models/store';

export default () => {
  const global = useGloContext();
  const { info, dispatch } = global;
  console.log(global);
  return (
      <div>
          <Button onClick={() => {
              dispatch({
                  type: 'setInfo',
                  payload: {
                      name: 'Jxl',
                      age: 20
                  }
              })
          }}>change info</Button>
          <p>{info.name}</p>
          <p>{info.age}</p>
      </div>
  )
}