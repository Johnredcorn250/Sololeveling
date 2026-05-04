let state={exercises:[],history:[],start:null,elapsed:0,running:false};
let timerInt, chart;

function format(ms){
 let s=Math.floor(ms/1000);
 let h=Math.floor(s/3600);
 let m=Math.floor((s%3600)/60);
 let sec=s%60;
 return h.toString().padStart(2,'0')+':'+m.toString().padStart(2,'0')+':'+sec.toString().padStart(2,'0');
}

function updateTimer(){
 let ms=state.elapsed;
 if(state.running) ms+=Date.now()-state.start;
 document.getElementById('timer').innerText=format(ms);
}

function startTimer(){
 if(!state.running){state.start=Date.now();state.running=true;}
 timerInt=setInterval(updateTimer,1000);
}

function pauseTimer(){
 if(state.running){state.elapsed+=Date.now()-state.start;state.running=false;}
 clearInterval(timerInt);
}

function addExercise(){
 state.exercises.push({
  name:name.value,
  weight:+weight.value,
  sets:+sets.value,
  reps:+reps.value
 });
 render();
}

function volume(s){
 return s.exercises.reduce((a,e)=>a+(e.weight*e.sets*e.reps||0),0);
}

function renderChart(){
 let labels=state.history.map(h=>new Date(h.date).toLocaleDateString());
 let data=state.history.map(volume);
 if(chart) chart.destroy();
 chart=new Chart(document.getElementById('chart'),{
  type:'line',
  data:{labels,datasets:[{data}]}
 });
}

function endWorkout(){
 if(!state.exercises.length) return;
 state.history.unshift({date:Date.now(),exercises:[...state.exercises]});
 state.exercises=[];
 state.elapsed=0;
 state.running=false;
 renderHistory();
 renderChart();
}

function renderHistory(){
 history.innerHTML=state.history.map(h=>`
  <div>${new Date(h.date).toDateString()} - Volume ${volume(h)}</div>
 `).join('');
}

function render(){}

