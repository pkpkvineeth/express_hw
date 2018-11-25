function route(nav)
{
const data=[{course:'CSE',content:"Show some content",staff:"(Show some value) Staffs",student:"(Show some value) Students"},
{course:'EEE',content:"Show some content",staff:"(Show some value) Staffs",student:"(Show some value) Students"},
{course:'ECE',content:"Show some content",staff:"(Show some value) Staffs",student:"(Show some value) Students"},
{course:'ME',content:"Show some content",staff:"(Show some value) Staffs",student:"(Show some value) Students"}];
const express=require('express');
const courseRouter=express.Router();
courseRouter.route('/').get((req,res)=>{
    res.render('courses',{nav});
})
courseRouter.route('/:id').get((req,res)=>{
    var id=req.params.id;
    if(id==1)
    {
        res.render('courses',{nav,details:data[0]});
    }
    else if(id==2)
    {
        res.render('courses',{nav,details:data[1]});
    }
    else if(id==3)
    {
        res.render('courses',{nav,details:data[2]});
    }
    else
    {
        res.render('courses',{nav,details:data[3]});
    }
})
return courseRouter;
}
module.exports=route;