setInterval(function(){
    let d= new Date();
    let gethrs=d.getHours();
    let getmints=d.getMinutes();
    let getsecond=d.getSeconds();

    let hrotation=30*gethrs + getmints/2;
    let mrotation=6*getmints;
    let secrotation=6*getsecond;
    let mysound= new Audio('clock sound.mp3');

    hour.style.transform=`rotate(${hrotation}deg)`
    minutes.style.transform=`rotate(${6*getmints}deg)`
    second.style.transform=`rotate(${6*getsecond}deg)`
    mysound.play()


},1000)