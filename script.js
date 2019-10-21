var color;

$('#violet, #indigo, #blue, #green, #yellow,#orange,#red,#white').click(function() {
  // console.log(this.value);
  color = this.value;
  // console.log(color);
});

// console.log(color);

$('#btn-let1').click(function() {
  var let1 = $('#let-1').val();

  function getColor(e) {
    color = e.value;
  }
  $('#h1')
    .text(let1)
    .css('color', color);
});

$('#btn-let2').click(function() {
  var let2 = $('#let-2').val();
  $('#h3').text(let2);
  function getColor(e) {
    color = e.value;
  }
  $('#h3')
    .text(let2)
    .css('color', color);
});

$('#brdr').click(function() {
  var bd = $('#bd').val();
  bd += 'px';
  // $('#div').text(let2);
  function getColor(e) {
    color = e.value;
  }
  $('#div').css({
    'border-color': color,
    'border-weight': bd,
    'border-style': 'solid'
  });
});

$('#bg').click(function() {
  // var bg = $('#bd').val();
  function getColor(e) {
    color = e.value;
  }
  $('#div').css('background', color);
});

$('#rndCrnr').click(function() {
  var bd = $('#bd').val();
  bd += 'px';
  // $('#div').text(let2);
  function getColor(e) {
    color = e.value;
  }
  $('#div').css({
    'border-color': color,
    'border-weight': bd,
    'border-style': 'solid',
    'border-radius': '10px'
  });
});

function getColor(e) {
  color = e.value;
}

// console.log(color);
