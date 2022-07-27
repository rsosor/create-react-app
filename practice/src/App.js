import React from 'react';
import axios from 'axios';

import './App.css';

const initialFormState = { id: 0, name: "" };

function App() {
  const [user, setUser] = React.useState(initialFormState);

  const addUser = (e) => {
    axios({
      method: 'post',
      url: "http://localhost:8080/demo/v1/postName",
      data: user,
      headers: {
        'accept': 'text/plain',
        'api-version': '1.0',
        'Content-Type': 'application/json',
      }
    });
    let responseUser = getUserList();
    setUser(responseUser);
  }

  const deleteUser = (user) => {
    axios({
      method: 'post',
      url: "http://localhost:8080",
      data: user,
      headers: {
        'accept': 'text/plain',
        'api-version': '1.0',
        'Content-Type': 'application/json',
      }
    });
  }

  const editUser = (user) => {
    axios({
      method: 'post',
      url: "http://localhost:8080",
      data: user,
      headers: {
        'accept': 'text/plain',
        'api-version': '1.0',
        'Content-Type': 'application/json',
      }
    })
    // .then((result) => {
    //   if (CheckSessionKey(result)) {
    //       console.log("check session key");
    //       return;
    //   }
    //   if (result.data.length === 0) {
    //       alert("GetRemark NoData");
    //   }
    //   console.log(result);
    //   if (result.data === null) return;

    //   dateRemark = {
    //       Date: result.data.Date,
    //       Remark: result.data.Remark
    //   }
    //   setDateRemark(dateRemark);
    // })
    // .catch((err) => {
    //   console.error(err);
    //   if (err.response && err.response.data && err.response.data.message) {
    //       alert(err.response.data.message);
    //   } else {
    //       alert(err.message);
    //   }
    // })
  }

  const getUserList = () => {
    axios({
      method: 'get',
      url: "http://localhost:8080",
      headers: {
        'accept': 'text/plain',
        'api-version': '1.0',
        'Content-Type': 'application/json',
      }
    });
  }

  return (
    <div className="App">

      <form style={{ display: 'flex', flexDirection: 'row', margin: '30px'}}>
          <label style={{ margin: '5px'}}>Name</label>
          <input style={{ margin: '5px'}} type="text" name="name" />
          <button onClick={(e) => { addUser() }} style={{ margin: '5px'}}>Add new user</button>
          <button onClick={(e) => { getUserList() }} style={{ margin: '5px'}} >查詢</button>
      </form>

      

      <table style={{ display: 'flex', flexDirection: 'column', margin: '30px', border: '1px solid'}}>
        <caption>用戶</caption>
        <tr style={{ width: '100%', display: 'flex', alignItems: 'center' ,justifyContent: 'center' , borderTop: '1px solid'}}>
          <td style={{ width: '25%' ,borderRight: '1px solid'}}>編號</td>
          <td style={{ width: '25%' ,borderRight: '1px solid'}}>姓名</td>
          <td style={{ width: '25%',borderRight: '1px solid'}}>動作</td>
          <td style={{ width: '25%'}}>動作</td>
        </tr>
        <tr style={{ width: '100%', display: 'flex', alignItems: 'center' ,justifyContent: 'center', borderTop: '1px solid'}}>
          <td style={{ width: '25%',borderRight: '1px solid'}}>1</td>
          <td style={{ width: '25%' ,borderRight: '1px solid'}}>{ user.name }</td>
          <td style={{ width: '25%',borderRight: '1px solid'}}><button onClick={(e) => { editUser() }}>修改</button></td>
          <td style={{ width: '25%'}}><button onClick={(e) => { getUserList() }}>刪除</button></td>
        </tr>
        <tr style={{ width: '100%', display: 'flex', alignItems: 'center' ,justifyContent: 'center', borderTop: '1px solid'}}>
          <td style={{ width: '25%',borderRight: '1px solid'}}>2</td>
          <td style={{ width: '25%' ,borderRight: '1px solid'}}>Stockholm</td>
          <td style={{ width: '25%',borderRight: '1px solid'}}><button onClick={(e) => { editUser() }}>修改</button></td>
          <td style={{ width: '25%'}}><button onClick={(e) => { deleteUser() }}>刪除</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
