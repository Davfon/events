const PAGESIZE = 25;
  const MONTHS = ["JAN", "FEB", "MÄR", "APR", "JUN", "JUL", "AUG", "SEP", "NOV", "DEZ"];
  
  fetch('https://dummyjson.com/products/1')
    .then((response) => response.json())
    .then((data) => {console.log(data); return data})
    .then((data2) => {
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

      let monthTitleList = []
      for (let i = 0; i < PAGESIZE; i++) {
        let d = new Date(0);
        monthTitleList.push(MONTHS[d.getMonth()] + " " + d.getFullYear());
      }

      let monthsToBeDisplayed = [monthTitleList[0]];
      for (let i = 1; i < monthTitleList.length; i++) {
        if (monthTitleList[i] !== monthTitleList[i-1]) {
          monthsToBeDisplayed.push(monthTitleList[i])
        }
      }

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

      let monthContainerList = []
      for (let i = 0; i < monthsToBeDisplayed.length; i++) {
        let monthContainer = document.createElement("div");
        monthContainer.className = "month-container";
        monthContainer.id = "mc" + i;

        let monthTitle = document.createElement("div");
        monthTitle.className = "month-title";
        monthTitle.id = "mt" + i;

        monthContainer.appendChild(monthTitle);
        monthContainerList.push(monthContainer);
      }

      let eventContainerList = []
      for (let i = 0; i < monthTitleList.length; i++) {
        let eventContainer = document.createElement("div");
        eventContainer.className = "event-container";
        eventContainer.id = "ec" + i;

        let image = document.createElement("img");
        image.className = "image";
        image.src = "https://www.alpamare.ch/wp-content/uploads/2020/01/Alpabob-jungle_1025x577-2.jpg";
        image.id = "image" + i;

        let infoBox = document.createElement("div");
        infoBox.className = "info-box";
        infoBox.textContent = "Info Event";
        infoBox.id = "ib" + i;

        eventContainer.appendChild(image);
        eventContainer.appendChild(infoBox);
        eventContainerList.push(eventContainer);
      }

      for (let i = 0; i < monthContainerList.length; i++) {
        for (let j = 0; j < countList[i]; j++) {
          let eventContainer = eventContainerList.shift();
          monthContainerList[i].appendChild(eventContainer);
        }
      }

      eventsContainerNarrow.appendChild(title);
      for (let i = 0; i < monthContainerList.length; i++) {
        eventsContainerNarrow.appendChild(monthContainerList[i]);
      }
      eventsContainerWide.appendChild(eventsContainerNarrow);
      app.appendChild(eventsContainerWide);
      document.body.appendChild(app);
    })