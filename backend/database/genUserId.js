const userId = () => {
    let year = new Date().getFullYear()-2000;
    let month = new Date().getMonth();
    let day = new Date().getDay();
    let hour= new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    if(month<10){
        month += 10;
    }
    if(hour<10){
        hour += 10;
    }
    if(minute<10){
        minute += 10;
    }
    if(second<10){
        second += 10;
    }
    
    return  (`${year}${month}${day}${hour}${minute}${second}`);
}

module.exports = userId;