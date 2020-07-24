import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Dashboard({data}) {
  console.log(data);
  return(
    <>
    <div>Dashboard</div>
    <p>{data.totalFollower}</p>
    </>
  );
}
function App() {
  const statusData = {
    totalFollower: 23004,
    socialMedia: {
      facebook: {
        handle: "@nathanf",
        followers: 1987,
        changes: 12,
        enagement: 87,
        enagementChanges: 3,
        likes: 52,
        likesChanges: -2
      },
      twitter: {
        handle: "@nathanf",
        followers: 1044,
        changes: 99,
        enagement: 117,
        enagementChanges: 303,
        likes: 507,
        likesChanges: 553
      },
      instagram: {
        handle: "@realnathanf",
        followers: "11k",
        changes: 1099,
        enagement: "52K",
        enagementChanges: 1375,
        likes: 5462,
        likesChanges: 2257
      },
      youtube: {
        handle: "Nathan F.",
        followers: 8239,
        changes: -144,
        enagement: 1407,
        enagementChanges: -12,
        likes: 107,
        likesChanges: -19
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard data={statusData}></Dashboard>
      </header>
    </div>
  );
}

export default App;
