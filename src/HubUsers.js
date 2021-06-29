import React, { useEffect, useState } from 'react';


const HubUsers = () => {

  const [users, setUsers ] = useState(null);
  const [searchTerm, setTerm] = useState('');

  const getUser = async (term) => {
    try{
      const rawData = await fetch(`https://api.github.com/search/users?q=${term}`);
      const data = await rawData.json();
      setUsers(data.items);
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect( () => {
    getUser(searchTerm);
  }, [searchTerm])

  return (
    <div>
      Users
      <input type="text" onChange={ (e) => setTerm(e.target.value) }></input>
      <span>{searchTerm}</span>
      <ul>
        { users && users.map( (user) => {
          return <li>{user.login}</li>
        }) }
      </ul>
    </div>
  )
}

export default HubUsers;
