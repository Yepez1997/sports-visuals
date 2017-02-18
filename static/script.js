String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
function setName(name) {
  $('#name').html(name.capitalize());
}

function array_generator(input, usedColumns=defaultColumns)
{
  var columnsLength = usedColumns.length;
  var newArray = usedColumns.map(function() {
    var r = [];
    for(var i = 0; i < columnsLength; i++) {
      r.push(0);
    }
    return r;
  });

  for (var j = 0; j < usedColumns.length; j++) {
    for (var k = 0; k < usedColumns.length; k++) {
      for(var i = 0; i < input.length; i++) {
        if (input[i][0] == usedColumns[j] && input[i][1] == usedColumns[k]) {
          newArray[j][k] = input[i][2];
          break;
        }
      }
    }
  }

  return newArray;
}

// var matrix = [      [    0.  ,  4836.15,   835.07,   846.4 ],       [ 4836.15,     0.  ,  6291.64,  5759.34],       [  835.07,  6291.64,     0.  ,  4848.59],       [  846.4 ,  5759.34,  4848.59,     0.  ] ];

$(window).on('resize', function(e) {
  // alert();
  // $("svg").width($(window).width() * 0.5);
})

function resizeSVG() {
  var $svg = $("svg");
  var $window = $(document);
  var marginLeft = parseInt(($window.width() - $svg.outerWidth()) / 2.0).toString();
  console.log(marginLeft);
  $svg.css('margin-left', marginLeft);
}
function init() {
  var defaultColumns =  ['bluejaysMLB','dodgersMLB', 'astrosMLB', 'yankeesMLB','angelsMLB'];
  var matrix = array_generator(all_teams, defaultColumns);
  render(matrix);
  setName("user");
  resizeSVG();
  $(window).on('resize', function() {
    resizeSVG();
  });
}

$(document).ready(function() {
	init();
});

function render(matrix) {
  $("svg").html('');
  var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      outerRadius = Math.min(width, height) * 0.5 - 40,
      innerRadius = outerRadius - 30;

  var formatValue = d3.formatPrefix(",.0", 1e3);

  var chord = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending);

  var arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

  var ribbon = d3.ribbon()
      .radius(innerRadius);

  var color = d3.scaleOrdinal()
      .domain(d3.range(4))
      .range(["#AB0003", "#FF5910", "#FFC800", "#047A4A", "#003087", "#4F2683"]);

  var g = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .datum(chord(matrix));

  var group = g.append("g")
      .attr("class", "groups")
    .selectAll("g")
    .data(function(chords) { return chords.groups; })
    .enter().append("g");
    
  group.append("path")
      .style("fill", function(d) { return color(d.index); })
      .style("stroke", function(d) { return d3.rgb(color(d.index)).darker(); })
      .attr("d", arc);
/*
  var groupTick = group.selectAll(".group-tick")
    .data(function(d) { return groupTicks(d, 1e3); })
    .enter().append("g")
      .attr("class", "group-tick")
      .attr("transform", function(d) { return "rotate(" + (d.angle * 180 / Math.PI - 90) + ") translate(" + outerRadius + ",0)"; });

  groupTick.append("line")
      .attr("x2", 6);

  groupTick
    .filter(function(d) { return d.value % 5e3 === 0; })
    .append("text")
      .attr("x", 8)
      .attr("dy", ".35em")
      .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180) translate(-16)" : null; })
      .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
      .text(function(d) { return formatValue(d.value); });
      */

  g.append("g")
      .attr("class", "ribbons")
    .selectAll("path")
    .data(function(chords) { return chords; })
    .enter().append("path")
      .attr("d", ribbon)
      .style("fill", function(d) { return color(d.target.index); })
      .style("stroke", function(d) { return d3.rgb(color(d.target.index)).darker(); });

}


// Returns an array of tick angles and values for a given group and step.
// function groupTicks(d, step) {
//   var k = (d.endAngle - d.startAngle) / d.value;
//   return d3.range(0, d.value, step).map(function(value) {
//     return {value: value, angle: value * k + d.startAngle};
//   });
// }
