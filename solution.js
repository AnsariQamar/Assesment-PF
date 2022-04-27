const data=require("./1-input.json");
const expenseData=data.expenseData;
const revenueData=data.revenueData;

expenseData.sort((a,b)=>new Date(a.startDate)-new Date(b.startDate));
revenueData.sort((a,b)=>new Date(a.startDate)-new Date(b.startDate));

let ans={};
let start=Math.min(new Date(expenseData[0].startDate),new Date(revenueData[0].startDate));
let end=Math.max(new Date(expenseData[expenseData.length-1].startDate),new Date(revenueData[revenueData.length-1].startDate));

let d=start;
while( d<=end){
    ans[new Date(d)]=0;
    let res=expenseData.filter(ele=>new Date(ele.startDate).getTime()==new Date(d).getTime());
    let res2=revenueData.filter(ele=>new Date(ele.startDate).getTime()==new Date(d).getTime());

    ans[new Date(d)]=(res2==false?0:res2.reduce((acc,ele)=>acc+ele.amount,0))-(res==false?0:res.reduce((acc,ele)=>acc+ele.amount,0));
    d=new Date(d);
    d=d.setMonth(d.getMonth()+1);
}
let balance=Object.keys(ans).map((ele)=>{
    return(
        {
            amount:ans[ele],
            startDate:new Date(ele).toISOString()
        }
    );
})
let finalResult={balance};
console.log(finalResult);

