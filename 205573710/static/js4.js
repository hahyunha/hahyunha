// // give me the url adress of the page
// const activePage = window.location.pathname;
// console.log(activePage);
// // יצרנו  לולאה שעובר על כל ערכי, ואמרנו לו כאשר אתה תיהיה בכתובת אז לך לסי אס אס ותשנה משהו

// const activeNav = document.querySelectorAll('nav a').forEach(
//     mylinks =>{
//         if (mylinks.href.includes(`${activePage}`)) {
//             mylinks.classList.add('active');
//         }
//     }
// )
// fun =>{
//      {
//         document.getElementById("signUp").onclick= function ()  {order()};
//     }

// }
// function order(){
        
// }
$('#addPhotosBtn').click(function() {
    $(this).parents().find('#addPhotosInput').click();
  });
  
  document.getElementById('addPhotosInput').onchange = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const li = ` <li> <img src=" ${url} ">
     <span><i class="fa fa-trash"></i></span>
     </li>`
    $('.photos-list ul').append(li);
  };
  
  $('#addVideosBtn').click(function() {
    $(this).parents().find('#addVideosInput').click();
  });
  
  document.getElementById('addVideosInput').onchange = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const li = ` <li> <video controls="controls" src=" ${url} " type="video/mp4" width="400px" height="200px"></video>
         <span><i class="fa fa-trash"></i></span>
     </li>`
    $('.video-list ul').append(li);
  };