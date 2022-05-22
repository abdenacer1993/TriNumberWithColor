
export const RandNumCol=(x,min,max)=>{
    let arr=[]
    for(let i=0;i<x;i++){
        let num=Math.floor(Math.random()*(max-min)+min)
        let color=(num/100)*255
        arr.push({num,color})
    }
return arr
}