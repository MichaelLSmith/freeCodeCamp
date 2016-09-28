function booWho(bool){
    console.log('function start');
    console.log(bool);
    let test;

    if(bool === true || bool === false){
        console.log(bool);
        test = Boolean(true);
    }

    else {
        test = Boolean(false);
    }

    console.log(test);
}

booWho(false);
booWho(true);
