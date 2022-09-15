import './App.css';
import React, { useEffect } from 'react';
import Praise from './praise.jpg';

function App() {
  let pageNumber = 2;

  useEffect(() => {
    const months = ["JANUAR", "FEBRUAR", "MÄRZ", "APRIL", "MAI", "JUNI", "JULI", "AUGUST", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DEZEMBER"];

    fetch('https://ical2web.czz.ch:10111/events/Gottesdienst?pageNumber=1&pageSize=5')
    .then(res => res.json())
    .then(data => {
      console.log(data)
  
      let eventCounter = 1;
      const monthsEvents = [];
  
      for (let i = 0; i < 5; i++) {
        var d = new Date(0);
        d.setUTCSeconds(data.entity[0].startEpochMillis / 1000);
        monthsEvents.push(months[d.getMonth()]);
      }
  
      let uniqueMonths = [...new Set(monthsEvents)];
      console.log(monthsEvents)
      console.log(uniqueMonths)
  
      for (let i = 0; i < uniqueMonths.length; i++) {
        const monthContainer = document.createElement("div");
        monthContainer.className = "month-container";
        monthContainer.id = uniqueMonths[i];
  
        const monthTitle = document.createElement("div");
        monthTitle.className = "month-title";
        monthTitle.textContent = uniqueMonths[i];
        monthTitle.id = uniqueMonths[i] + "-T";
        monthContainer.appendChild(monthTitle);
  
        for (let j = 0; j < 5; j++) {
          if (uniqueMonths[i] === monthsEvents[j]) {
            const eventContainer = document.createElement("div");
            eventContainer.className = "event-container";
            eventContainer.id = "event" + eventCounter;
            eventCounter = eventCounter + 1;
  
              const image = document.createElement("img");
              image.className = "image";
              image.src = Praise;
              eventContainer.appendChild(image);
  
              const infoBox = document.createElement("div");
              infoBox.className = "info-box";
              infoBox.textContent = data.entity[j].title;
              eventContainer.appendChild(infoBox);
  
            monthContainer.appendChild(eventContainer);
          }
        }
  
        document.getElementById("ecn").appendChild(monthContainer);
      }
    })
  }, []);

  const handleClick = async () => {

    fetch('https://ical2web.czz.ch/events/Gottesdienst?pageNumber=' + pageNumber + '&pageSize=5')
    .then(res => res.json())
    .then(data => {
      console.log(data)

      const monthContainer = document.createElement("div");
      monthContainer.className = "month-container";

        const monthTitle = document.createElement("div");
        monthTitle.className = "month-title";
        monthTitle.textContent = "data.title";

        const eventContainer1 = document.createElement("div");
        eventContainer1.className = "event-container";
        
          const image1 = document.createElement("img");
          image1.className = "image";
          image1.src = "data.images[2]";
          eventContainer1.appendChild(image1);

          const infoBox1 = document.createElement("div");
          infoBox1.className = "info-box";
          infoBox1.textContent = "data.description";
          eventContainer1.appendChild(infoBox1);


      monthContainer.appendChild(monthTitle);
      monthContainer.appendChild(eventContainer1);
      document.getElementById("ecn").appendChild(monthContainer);

      pageNumber = pageNumber + 1;
    })
  }

  return (
    <div className="App">
      <div className="events-container-wide">
        <div id="ecn" className="events-container-narrow">
          <div className="title">
            Events
          </div>
          <div className="white-gradient"/>
          <button className="more-button" onClick={handleClick}>Mehr</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*





<div className="month-container">
            <div className="month-title">
              OKTOBER
            </div>
            <div className="event-container">
              <img className="image" alt="" src="https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg"/>
              <div className="info-box">
                Alpamare - Wasserplausch mit deinen Freunden <br></br> 21. Oktober 2022, 19:00 Uhr - 22. Oktober 2022, 09:00 Uhr
              </div>
            </div>
            <div className="event-container">
              <img className="image" alt="" src="https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg"/>
              <div className="info-box">
                Alpamare2 - Wasserplausch mit deinen Freunden2 <br></br> 23. Oktober 2022, 19:00 Uhr - 24. Oktober 2022, 09:00 Uhr
              </div>
            </div>
            <div className="event-container">
              <img className="image" alt="" src="https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg"/>
              <div className="info-box">
                Alpamare2 - Wasserplausch mit deinen Freunden2 <br></br> 23. Oktober 2022, 19:00 Uhr - 24. Oktober 2022, 09:00 Uhr
              </div>
            </div>
          </div>






<script>
  fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
</script>
<div className="events-container-wide"
  style="
  display: flex;
  justify-content: center;
  align-items: center;
">
  <div className="events-container-narrow"
    style="
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 500px;
    height: 600px;
    background-color: #eeeeee;
  ">
    <div className="title"
      style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: bold;
      width: 500px;
      height: 80px;
      background-color: #bbbbbb;
    ">
      Events
    </div>
    <div className="month-container"
      style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      height: auto;
      background-color: white;
      margin-top: 10px;
      margin-bottom: 10px;
    ">
      <div className="month-title"
        style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 40px;
        background-color: #dddddd;
      ">
        OKTOBER
      </div>
      <div className="event-container"
        style="
        display: flex;
        width: 500px;
        height: 100px;
        background-color: white;
      ">
        <img src="https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg" style="
          object-fit: cover;
          width: 100px;
          height: 100px;
        "/></img>
        <div className="info-box"
          style="
          width: 400px;
          height: 80px;
          background-color: white;
          padding: 10px;
          font-size: 14px;
        ">
          <b>Alpamare</b> - Wasserplausch mit deinen Freunden </br> 21. Oktober 2022, 19:00 Uhr - 22. Oktober 2022, 09:00 Uhr
        </div>
      </div>
      <div className="event-container"
        style="
        display: flex;
        width: 500px;
        height: 100px;
        background-color: white;
      ">
        <img src="https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg" style="
          object-fit: cover;
          width: 100px;
          height: 100px;
        "></img>
        <div className="info-box"
          style="
          width: 400px;
          height: 80px;
          background-color: white;
          padding: 10px;
          font-size: 14px;
        ">
          <b>Alpamare2</b> - Wasserplausch mit deinen Freunden2 </br> 23. Oktober 2022, 19:00 Uhr - 24. Oktober 2022, 09:00 Uhr
        </div>
      </div>
    </div>
  </div>
</div>
*/
