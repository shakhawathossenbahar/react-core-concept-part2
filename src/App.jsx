import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Batsman2 from "./Batsman2";
// import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";


const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const friendsName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {

  const postsPromise = fetchPosts();


  const friendsPromise = friendsName();

  function handleClick() {
    alert("I'm clicked");
  }

  const handleClick2 = () => {
    alert("clicked 2");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Counter></Counter> */}

      <Suspense fallback={<h5>Posts are coming</h5>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h4>Data is loading...</h4>}>
        <Friends friendsName={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users userData = {fetchUsers}></Users>
      </Suspense> */}

      <Batsman2></Batsman2>
      <Batsman></Batsman>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert("click 3")}>Clicke me 3</button>
      <button onClick={() => handleAdd5(10)}>Click to add 5</button>
    </>
  );
}

export default App;
