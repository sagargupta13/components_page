$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })


  function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
      tab.classList.remove('active');
    }
  
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
  }


//  function for navigation pills 
function openPill(pillName) {
  const pills = document.getElementsByClassName('pill-content');
  for (const pill of pills) {
    pill.classList.remove('active');
  }

  const activePill = document.getElementById(pillName);
  activePill.classList.add('active');
}

// function for alert message 

function dismissAlert(closeIcon) {
  const alert = closeIcon.parentElement;
  alert.style.display = 'none';
}

// function for modal 
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


// popovers Initialization
$(function () {
  $('[data-toggle="popover"]').popover()
})


// popovers Initialization
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})



let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}