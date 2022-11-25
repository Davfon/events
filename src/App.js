import './App.css';
import React, { useEffect } from 'react';
import Praise from './praise.jpg';

function App() {
  useEffect(() => {
    const PAGESIZE = 10;
    const MONTHS = ["JAN", "FEB", "MÄR", "APR", "JUN", "JUL", "AUG", "SEP", "NOV", "DEZ"];

    //fetch('https://ical2web.czz.ch:10111/events/Gottesdienst?pageNumber=1&pageSize=' + PAGESIZE)
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
  
      // Divs that are used exactly once
      let app = document.createElement("div");
      app.className = "App";
      app.id = "App";

        let eventsContainerWide = document.createElement("div");
        eventsContainerWide.className = "events-container-wide";
        eventsContainerWide.id = "ecw";

          let eventsContainerNarrow = document.createElement("div");
          eventsContainerNarrow.className = "events-container-narrow";
          eventsContainerNarrow.id = "ecn";

            let title = document.createElement("div");
            title.className = "title";
            title.textContent = "Events";
            title.id = "title";

      // Procedurally create other Divs
      // monthContainer, monthTitle, eventContainer, image, infoBox

      // make a list that for each event contains the month and year in which the event occurs
      // example: ["FEB 2023", "FEB 2023", "MÄR 2023", "MÄR 2023", "MÄR 2023"]
      let monthTitleList = []
      for (let i = 0; i < PAGESIZE; i++) {
        if (i < 2) {
          let d = new Date(0);
          //d.setUTCSeconds(data.entity[i].startEpochMillis / 1000);

          monthTitleList.push(MONTHS[d.getMonth()] + " " + d.getFullYear());
        } else {
          let d2 = new Date("2023-01-26");
          //d.setUTCSeconds(data.entity[i].startEpochMillis / 1000);

          monthTitleList.push(MONTHS[d2.getMonth()] + " " + d2.getFullYear());
        }
      }

      // make a list of all months that need to be displayed
      // example: ["FEB 2023", "MÄR 2023"]
      let monthsToBeDisplayed = [monthTitleList[0]];
      for (let i = 1; i < monthTitleList.length; i++) {
        if (monthTitleList[i] !== monthTitleList[i-1]) {
          monthsToBeDisplayed.push(monthTitleList[i])
        }
      }

      // make a list that shows how many evets are in each of the months that need to be displayed
      // example: [2, 3]
      let countList = [];
      let count = 1;
      for (let i = 1; i < monthTitleList.length; i++) {
        if (monthTitleList[i] === monthTitleList[i-1]) {
          count = count + 1;
        } else {
          countList.push(count);
          count = 1;
        }
      }
      countList.push(count);

      // create the months
      let monthContainerList = []
      for (let i = 0; i < monthsToBeDisplayed.length; i++) {
        let monthContainer = document.createElement("div");
        monthContainer.className = "month-container";
        monthContainer.id = "mc" + i;

        let monthTitle = document.createElement("div");
        monthTitle.className = "month-title";
        monthTitle.innerHTML = monthsToBeDisplayed[i]
        monthTitle.id = "mt" + i;

        monthContainer.appendChild(monthTitle);
        monthContainerList.push(monthContainer);
      }

      // create the events
      let eventContainerList = []
      for (let i = 0; i < monthTitleList.length; i++) {
        let eventContainer = document.createElement("div");
        eventContainer.className = "event-container";
        eventContainer.id = "ec" + i;

        let image = document.createElement("img");
        image.className = "image";
        image.src = "https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg";
        image.id = "image" + i;

        let date = document.createElement("div");
        date.className = "date";
        date.textContent = "12.";
        date.id = "date" + i;

        let infoBox = document.createElement("div");
        infoBox.className = "info-box";
        infoBox.textContent = "Alpamare - Wasserplausch\nStart: 18:00Uhr\nEnde: 09:00";
        infoBox.id = "ib" + i;

        eventContainer.appendChild(date);
        eventContainer.appendChild(image);
        eventContainer.appendChild(infoBox);
        eventContainerList.push(eventContainer);
      }

      // put the events inside the months (shift pops the first element of a list)
      for (let i = 0; i < monthContainerList.length; i++) {
        for (let j = 0; j < countList[i]; j++) {
          let eventContainer = eventContainerList.shift();
          monthContainerList[i].appendChild(eventContainer);
        }
      }

      let gradient = document.createElement("div");
      gradient.className = "white-gradient";
      gradient.id = "wg"

      let moreButton = document.createElement("div");
      moreButton.className = "more-button";
      moreButton.textContent = "Mehr";
      moreButton.id = "more-btn";

      let lessButton = document.createElement("div");
      lessButton.className = "more-button";
      lessButton.textContent = "Weniger";
      lessButton.id = "less-btn";

      moreButton.onclick = function() {document.getElementById("ecn").style.height = "auto"; document.getElementById("more-btn").remove(); document.getElementById("ecn").appendChild(lessButton);};
      lessButton.onclick = function() {document.getElementById("ecn").style.height = "700px"; document.getElementById("less-btn").remove(); document.getElementById("ecn").appendChild(moreButton);};

      // Once all Elements are created append them to the correct parent
      eventsContainerNarrow.appendChild(title);
      for (let i = 0; i < monthContainerList.length; i++) {
        eventsContainerNarrow.appendChild(monthContainerList[i]);
      }
      eventsContainerNarrow.appendChild(gradient);
      eventsContainerNarrow.appendChild(moreButton);
      eventsContainerWide.appendChild(eventsContainerNarrow);
      app.appendChild(eventsContainerWide);

      // insert Events Overview (app) into Website
      document.body.appendChild(app)
    })
  }, []);

  return (
    <div id="root"></div>
  );
}

export default App;

/*
for (let i = 0; i < PAGESIZE; i++) {
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

    <div className="App">
      <div className="events-container-wide">
        <div id="ecn" className="events-container-narrow">
          <div className="title">
            Events
          </div>
          <div id="my-div"></div>
          <div className="white-gradient"/>
          <button className="more-button" onClick={handleClick}>Mehr</button>
        </div>
      </div>
    </div>

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
