var timer=$('#timer');
var dateEl=$('#getDate')
var hourly=$('#hours');
var projectName=$('#projectName')
var projecType=$('#projectType');
var currentTime=new Date();
var day=Date.now();
var month=currentTime.getMonth()+1;
var year=currentTime.getFullYear();

 document.getElementById("getDate").min = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate()

$(document).ready(function(){
    var time=moment().format('MMMM Do YYYY, h:mm:ss a'); // November 21st 2022, 4:27:11 pm
timer.text(time)

console.log('day CURRENT',currentTime)

$('#submitBtn').on('click',()=>{

    

    if(dateEl.val()&&hourly.val()&&projectName.val()&&projecType.val()){
       var dateL=dateEl.val();
    var horlyL=hourly.val()
    var projectNameL=projectName.val();
    var projecTypeL=projecType.val()
        createTableFun(dateL,horlyL,projectNameL,projecTypeL)
       if(createTableFun){
        document.getElementById('projectName').value=""
        document.getElementById('projectType').value=""
        document.getElementById('hours').value=""
        document.getElementById('getDate').value=""
      window.alert('added')
      document.getElementById('ex1').style.display="none";

    }else{
        window.alert('Error Try again !!')

    }
        

    
    
    }else{

        window.alert('all field are required to fill')
    }
    })

  });
 
 setInterval(function(){
    var time=moment().format('MMMM Do YYYY, h:mm:ss a'); // November 21st 2022, 4:27:11 pm
timer.text(time)
  },100)


  function createTableFun(date,paid,name,type){
    var newTime=new Date(date);
var diffTime1=Math.abs(newTime-currentTime)
var diffTime=Math.ceil(diffTime1 / (1000 * 60 * 60 * 24))
var tr=$('<td>');

var totalEarnHTML=8*paid*diffTime
var deleteBtn=$('<button>');
deleteBtn.addClass('btn-close')
deleteBtn.attr("type","button");
deleteBtn.attr('aria-label','Close')
deleteBtn.text('X')
deleteBtn.on('click',(event)=>{
console.log('clicked',event.target)
})


// $('#container').append(`<td>#</td><td>${name}</td><td>${type}</td><td>${date}</td>
// <td>${paid}$</td><td>${diffTime} Days till Due Date</td><td>${totalEarnHTML}$</td> ${deleteBtn}`)

//   $('#container').append(deleteBtn)

var hash=$('<p>')
hash.text('#')

  var projectRowEl = $('<tr>');

  var projectNameTdEl = $('<td>').text(name);

  var projectTypeTdEl = $('<td>').text(type);

  var rateTdEl = $('<td>').text(date);

  var dueDateTdEl = $('<td>').text(paid);

  var daysLeftTdEl = $('<td>').text(diffTime);


  // You can also chain methods onto new lines to keep code clean
  var totalTdEl = $('<td>')
    .text('$' + totalEarnHTML);

  var deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(hash,
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );
  deleteProjectBtn.on('click',(e)=>{
    console.log(e.target.parent('tr'))
    var btnClicked=$(e.target);
    btnClicked.parent('tr').remove()
  })

 $('#container').append(projectRowEl);


















}

  
/* <form>


<input class="form-control form-control-lg m-2" type="text" id="projectName" placeholder="project name" aria-label=".form-control-lg example">
<select name="cars" class="form-control form-control-lg m-2" id="projectType">
  <option value="Web Application(Front-End)">Web Application(Front-End)</option>
  <option value="Web Application(Back-End)">Web Application(Back-End)</option>
  <option value="Web Application(Full STACK)">Web Application(Full STACK)</option>
  <option value="Mobile App">Mobile App</option>
  <option value="Digital marketing campain">Digital marketing campain</option>

</select>
<input class="form-control form-control-lg m-2" type="number"   id='hours' min="1" placeholder="hourly rate" aria-label=".form-control-lg example">
<input class="form-control form-control-lg m-2"  type="date" id="getDate" placeholder="due date" aria-label=".form-control-lg example">
<button type="button" id="submitBtn" data-dismiss="modal" class="btn btn-light p-3">Submit</button>
</form> */

