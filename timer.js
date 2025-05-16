function startTimer(){
    console.log('Starting session timer'); // Debug log

    //Check if timer already exists to prevent duplication
    if(document.getElementById('sessionTimer')) {
        console.log('Timer already exists, not creating a new one');
        return;
    }

    //Initialize session timer at 0 seconds 
    let sessionSeconds = 0;

    //Create timer display element
    const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.marginBottom = "20px";
    timerElement.style.color = "rgb(11, 34, 11)";
    timerElement.style.fontSize = "20px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);

    // Update timer display every second
    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        //Store current time in sessionStorage (automatically cleared when tab closes)
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        //Trigger special message for long sessions(over 5 minutes)
        if(sessionSeconds === 300){
            //5 minutes
            showLongMessage();
        }
    }, 1000);

    // When page is about to unload, stop the timer
    window.addEventListener('beforeunload', () =>{
        console.log('Page unloading, stopping timer'); // Debug log
        clearInterval(timerInterval);
    });
}

//Helper function format to display time
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let timeText = `⏱ Time on page: `;

    if(hours > 0 || minutes > 0){
        timeText += `${minutes}m `;
    }

    timeText += `${seconds}s`;
    element.textContent = timeText;
}

//Show message for users spending a long time on the site
function showLongMessage(){
    console.log('Showing long session message (5 minutes)');

    // check if messgae already exists to prevent duplicates
    if(document.getElementById('longSessionMessage')){
    console.log('Long message already exists');
    return;
}

const messageDiv = document.createElement('div');
messageDiv.id = "longSessionMessage";
messageDiv.style.padding = '10px';
messageDiv.style.margin = '20px 0';
messageDiv.style.backgroundColor = '#e5e6e1'
messageDiv.style.color = 'rgb(11, 34, 11)';
messageDiv.style.borderRadius= '8px';
messageDiv.style.textAlign = 'center';
messageDiv.innerHTML = `
<p style="color:rgb(11, 34, 11);">You've been exploring for 5 minutes! Thanks for your interest in our pet adoption finder.</p>
<button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px; border:none; border-radius:4px; cursor:pointer;">
Dismiss
</button> 
`;

// Check if timer element exists
const timerElement = document.getElementById('sessionTimer');
if(timerElement){
    document.body.insertBefore(messageDiv, timerElement);
} else{
    document.body.appendChild(messageDiv);
}

//Add event listener to dismiss button
const dismissButton = document.getElementById('dismissMessage');
if(dismissButton){
    dismissButton.addEventListener('click', function(){
        const message = document.getElementById('longSessionMessage');
        if(message){
            message.remove();
            }
        });
    }
};


startTimer();
