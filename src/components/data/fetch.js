

function fetchData(url) {
    return fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
  }


  function fetchData(url) {
    return fetch(url)
    .then(res => res.json())
  }

  Promise.all([
    fetchData('http://localhost:3000/members')
  ])
  .then(data => console.log(data))

  return (
    <Test />
  );
}