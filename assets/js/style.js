// for paragraph in seventh content/
function showParagraph(paraNumber) {
    const paragraphs = ["para_1", "para_2", "para_3"];
    const buttons = ["button_1", "button_2", "button_3"];
    
    // Hide all paragraphs and remove active class from all buttons
    paragraphs.forEach((para, index) => {
        document.getElementById(para).style.display = "none";
        document.getElementById(buttons[index]).classList.remove("active");
    });

    // Show the selected paragraph and add active class to the corresponding button
    document.getElementById(`para_${paraNumber}`).style.display = "block";
    document.getElementById(`button_${paraNumber}`).classList.add("active");
}
// for paragraph in eigth content accordion/
$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    } 
  
    var accordion = new Accordion($('#accordion'), false);
  });
  // for paragraph in eigth content s_accordion/
$(function() {
    var s_accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
    s_accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    } 
  
    var s_accordion = new s_accordion($('#s_accordion'), false);
  });
