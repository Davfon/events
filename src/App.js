import './App.css';

function App() {
  const handleClick = async () => {
    
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => {
      console.log(data)

      // TODO: get the data from: https://ical2web.czz.ch/events/Gottesdienst?pageNumber=1&pageSize=5
      //       create a for loop that dynamically generates the events overview, something like:
      //       for each event:
      //          if month is already there, add event there.
      //          if not, create new month and add it there.

      const monthContainer = document.createElement("div");
      monthContainer.className = "month-container";

        const monthTitle = document.createElement("div");
        monthTitle.className = "month-title";
        monthTitle.textContent = data.title;

        const eventContainer1 = document.createElement("div");
        eventContainer1.className = "event-container";
        
          const image1 = document.createElement("img");
          image1.className = "image";
          image1.src = data.images[2];
          eventContainer1.appendChild(image1);

          const infoBox1 = document.createElement("div");
          infoBox1.className = "info-box";
          infoBox1.textContent = data.description + " Price: " + data.price;
          eventContainer1.appendChild(infoBox1);





      monthContainer.appendChild(monthTitle);
      monthContainer.appendChild(eventContainer1);
      document.getElementById("1").appendChild(monthContainer);
    })
  }

  return (
    <div className="App">
      <div className="events-container-wide">
        <div id="1" className="events-container-narrow">
          <div className="title">
            Events
          </div>
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
          <div className="white-gradient"/>
          <button className="more-button" onClick={handleClick}>Mehr</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
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
