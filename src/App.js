import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const getData =async () => {
    const fetched = await fetch('https://leetcode-stats-api.herokuapp.com/_nifemiakeju_')
    const data = await fetched.json()
    setLoading(false)
    setData(data)

    console.log(await data);

   
  }
  useEffect(() => {
    getData()
  },[])


const {submissionCalendar} = data
console.log(submissionCalendar);

console.log(new Date(1683072000
* 1000  ));
  

  // console.log(submissionCalender);
  return (
    <div>App</div>
  )
}

export default App