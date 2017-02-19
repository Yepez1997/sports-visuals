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
// --------------------------------------------------------------//
// MLB // 
function get_mlb_teams()
{
  teams = [];
  for(i = 0; i < all_teams.length; i++)
  {
    team = all_teams[i][0];
    if(team.indexOf("MLB") !== -1 )
    {
      // console.log(all_teams[i][0])
      if(teams.indexOf(team) === -1)
      {
        teams.push(team)
      }
    }
  }
  return teams
}

// RUN //

  //$(window).on('resize', function(e) {
function make_headers()
{
// RUN //

  mlb = get_mlb_teams()
  for(i= 0; i < mlb.length; i++)
  {

   $('#teams-container').append("<label><input type='checkbox' class='mlb-check' value='"+mlb[i]+"'>"+mlb[i]+"</b></label><br>")

  }
}

function go_time_1()
{
  selected = [];

  $('.mlb-check').each(function(x,y){
    if(y.checked)
    {
      selected.push(y.value);
      
    }

  });
  //selected = input = usedColumns;
  return selected

}


//------------------------------------------------------------//
// var matrix = [      [    0.  ,  4836.15,   835.07,   846.4 ],       [ 4836.15,     0.  ,  6291.64,  5759.34],       [  835.07,  6291.64,     0.  ,  4848.59],       [  846.4 ,  5759.34,  4848.59,     0.  ] ];
// ------------------------------------------------------------//

// NFL //
function get_nfl_teams()
{
  teams = [];
  for(i = 0; i < all_teams.length; i++)
  {
    team = all_teams[i][0];
    if(team.indexOf("NFL") !== -1 )
    {
      // console.log(all_teams[i][0])
      if(teams.indexOf(team) === -1)
      {
        teams.push(team)
      }
    }
  }
  return teams
}

// RUN //
 // $(document).ready(function() {
 //   init();
   


 // $(window).on('resize', function(e) {
    // alert();
    // $("svg").width($(window).width() * 0.5);
// RUN //


{

  nfl = get_nfl_teams()
  for(i= 0; i < nfl.length; i++)
  {

   $('#teams-container-nfl').append("<label><input type='checkbox' class='nfl-check' value='"+nfl[i]+"'>"+nfl[i]+"</b></label><br>")

  }
}

function go_time_2()
{
  selected = [];

  $('.nfl-check').each(function(x,y){
    if(y.checked)
    {
      selected.push(y.value);
    }

  });
  return selected 
  //= input = usedColumns;


}

// --------------------------------------------------- //

// NBA // 

function get_nba_teams()
{
  teams = [];
  for(i = 0; i < all_teams.length; i++)
  {
    team = all_teams[i][0];
    if(team.indexOf("NBA") !== -1 )
    {
      // console.log(all_teams[i][0])
      if(teams.indexOf(team) === -1)
      {
        teams.push(team)
      }
    }
  }
  return teams
}

//RUN//
//$(window).on('resize', function(e) {
  // alert();
  // $("svg").width($(window).width() * 0.5);

{

  nba = get_nba_teams()
  for(i= 0; i < nba.length; i++)
  {

   $('#teams-container-nba').append("<label><input type='checkbox' class='nba-check' value='"+nba[i]+"'>"+nba[i]+"</b></label><br>")

  }
}

function go_time_3()
{
  selected = [];

  $('.nba-check').each(function(x,y){
    if(y.checked)
    {
      selected.push(y.value);
      
    }

  });
  return selected
  ;

}

// ------------------------------------------------------------- //

// NHL // 

function get_nhl_teams()
{
  teams = [];
  for(i = 0; i < all_teams.length; i++)
  {
    team = all_teams[i][0];
    if(team.indexOf("NHL") !== -1 )
    {
      // console.log(all_teams[i][0])
      if(teams.indexOf(team) === -1)
      {
        teams.push(team)
      }
    }
  }
  return teams
}


//RUN//
{

  nhl = get_nhl_teams()
  for(i= 0; i < nhl.length; i++)
  {

   $('#teams-container-nhl').append("<label><input type='checkbox' class='nhl-check' value='"+nhl[i]+"'>"+nhl[i]+"</b></label><br>")

  }
}

function go_time_4()
{
  selected = [];

  $('.nhl-check').each(function(x,y){
    if(y.checked)
    {
      selected.push(y.value);
     
    }

  });
  
  return selected

}


//RUN//
//GRAPH CHART//

// ------------------------------------------------------------ //






/*

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

*/
