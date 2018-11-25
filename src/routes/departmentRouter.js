function route(nav)
{
const data=[[{name:"name1",designation:"desig1",specialization:"specialization1"},{name:"name1",designation:"desig1",specialization:"specialization1"}],
[{name:"name2",designation:"desig2",specialization:"specialization2"},{name:"name2",designation:"desig2",specialization:"specialization2"}],
[{name:"name3",designation:"desig3",specialization:"specialization3"},{name:"name3",designation:"desig3",specialization:"specialization3"}],
[{name:"name4",designation:"desig4",specialization:"specialization4"},{name:"name4",designation:"desig4",specialization:"specialization4"}]
];
const stream=["CSE","EEE","ECE","ME"];
const express=require('express');
const departmentRouter=express.Router();
departmentRouter.route('/').get((req,res)=>{
    res.render('departments',{nav});
})
departmentRouter.route('/:id/:id1?').get((req,res)=>{
    var id=req.params.id;
    var id1=req.params.id1;
      if(id1==undefined)
        {
            res.render('departments',{nav,details:data[id-1],index:id,course:stream[id-1]});
        }
        else
        {
            data1=[data[id-1][id1]];
            res.render('departments',{nav,details:data1,index:5,course:stream[id-1]});
        }

})
return departmentRouter;
}
module.exports=route;