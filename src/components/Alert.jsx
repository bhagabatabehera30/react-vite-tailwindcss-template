import React, {useState} from 'react';

function AlertBox(type) {
    let coolObj={};
    if(type=='gray') {
         coolObj={bgc:'#ededed', textc:'#5d5d5d'};
    }
        if(type=='yellow') {
         coolObj={bgc:'#fff2b2', textc:'#7c620c'};
        }
        if(type=='orange') {
         coolObj={bgc:'#ffe6d3', textc:'#ff892f'};
        }
        if(type=='red') {
         coolObj={bgc:'#fad2e1', textc:'#7c193d'};
        }
        if(type=='green') {
         coolObj={bgc:'#98f5e1', textc:'#236c5b'};
        }
        if(type=='blue') {
         coolObj={bgc:'#caf0f8', textc:'#03045e'};
        }
            if(type=='black') {
         coolObj={bgc:'#313131', textc:'#e2e2e2'};
            }
    
    return coolObj;
}

function closeAlert(removeId){
let element = document.querySelector('.' + removeId);
//.log(element.classList);
 //element.classList.add("hidden");
}

function Alert({type, message}) {
    const d = new Date();
    let iDe = 'alert_' + d.getTime();
    let cData=AlertBox(type);
    let clsName=`flex justify-between py-4 px-8 bg-[${cData.bgc}]  text-[${cData.textc}] ${iDe}`;
    let removeAlert=closeAlert(iDe);
    console.log(iDe);
    return (
        <div>
        <div id={iDe} className={clsName}>
        <p className="font-sans">{message}</p>
        <button className="font-bold alert-del" onClick={removeAlert}>&#10005;</button>
        </div>
        </div>
    );
}

export default Alert;
