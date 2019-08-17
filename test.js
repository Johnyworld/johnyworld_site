const delay = (delay) => {
    return new Promise(res=>{
        setTimeout(()=>{
            res("delay?");
        }, delay);
    }) 
}

const cbTimeout = (delay, callback) => {
    return new Promise(res => {
        setTimeout(()=>{
            res(callback());
        }, delay)
    })
}

const bbb = async() => {
    console.log("Start!");
    await cbTimeout(3000, ()=>{ console.log('cc') });
    await cbTimeout(1500, ()=>{ console.log("Done!") });
    
}

bbb();