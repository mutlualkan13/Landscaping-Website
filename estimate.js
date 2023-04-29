// const estimateForm = document.getElementById('estimateForm');
// const estimateResult = document.getElementById('estimateResult');

// estimateForm.addEventListener('submit', function(event) {
//   event.preventDefault(); 
  
//   const yardSize = Number(document.getElementById('yardSize').value);
//   const landscapeMaintenance = Number(document.getElementById('landscapeMaintenance').value);
//   const treatmentFertilization = Number(document.getElementById('treatmentFertilization').value);
//   const lawnThatching = Number(document.getElementById('lawnThatching').value);
//   const grassCutting = Number(document.getElementById('grassCutting').value);
//   const mulching = Number(document.getElementById('mulching').value);
//   const seeding = Number(document.getElementById('seeding').value);
//   const aeration = Number(document.getElementById('aeration').value);
//   const treeInspections = Number(document.getElementById('treeInspections').value);
//   const treeTrimming = Number(document.getElementById('treeTrimming').value);
//   const shrubPruning = Number(document.getElementById('shrubPruning').value);
//   const weedManagement = Number(document.getElementById('weedManagement').value);
//   const treeRemoval = Number(document.getElementById('treeRemoval').value);

//   const landscapeMaintenanceCost = landscapeMaintenance * 10;
//   const treatmentFertilizationCost = yardSize * treatmentFertilization;
//   const lawnThatchingCost = yardSize * lawnThatching;
//   const grassCuttingCost = yardSize * grassCutting;
//   const mulchingCost = yardSize * mulching;
//   const seedingCost = yardSize * seeding;
//   const aerationCost = yardSize * aeration;
//   const treeInspectionsCost = treeInspections * 5;
//   const treeTrimmingCost = treeTrimming * 40;
//   const shrubPruningCost = shrubPruning * 10;
//   const weedManagementCost = weedManagement * 10;
//   const treeRemovalCost = treeRemoval * 80;
  
//   const totalCost = landscapeMaintenanceCost + treatmentFertilizationCost + lawnThatchingCost + grassCuttingCost + mulchingCost + seedingCost + aerationCost + treeInspectionsCost + treeTrimmingCost + shrubPruningCost + weedManagementCost + treeRemovalCost;
//   estimateResult.innerHTML = `<p>Your estimate is: $${totalCost.toFixed(2)}</p>`;
// });


const estimateForm = document.getElementById("estimateForm");
const estimateResult = document.getElementById("estimateResult");

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const yardSize = parseFloat(document.getElementById("yardSize").value);
  const landscapeMaintenance = parseFloat(
    document.getElementById("landscapeMaintenance").value || 0
  );
  const treatmentFertilization = parseFloat(
    document.getElementById("treatmentFertilization").value || 0
  );
  const lawnThatching = parseFloat(
    document.getElementById("lawnThatching").value || 0
  );
  const grassCutting = parseFloat(
    document.getElementById("grassCutting").value || 0
  );
  const mulching = parseFloat(document.getElementById("mulching").value || 0);
  const seeding = parseFloat(document.getElementById("seeding").value || 0);
  const aeration = parseFloat(document.getElementById("aeration").value || 0);
  const treeInspections = parseInt(
    document.getElementById("treeInspections").value || 0
  );
  const treeTrimming = parseInt(
    document.getElementById("treeTrimming").value || 0
  );
  const shrubPruning = parseInt(
    document.getElementById("shrubPruning").value || 0
  );
  const weedManagement = parseInt(
    document.getElementById("weedManagement").value || 0
  );
  const treeRemoval = parseInt(
    document.getElementById("treeRemoval").value || 0
  );

  const total =
    landscapeMaintenance * 50 +
    treatmentFertilization * yardSize +
    lawnThatching * yardSize +
    grassCutting * yardSize +
    mulching * yardSize +
    seeding * yardSize +
    aeration * yardSize +
    treeInspections * 100 +
    treeTrimming * 200 +
    shrubPruning * 75 +
    weedManagement * 50 +
    treeRemoval * 500;

  estimateResult.innerText = `$${total.toFixed(2)}`;
});

// get the estimate button element
const estimateBtn = document.getElementById('estimateBtn');

// add event listener to the button
estimateBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent form submission

  // call the getEstimate function and display the result
  const result = getEstimate();
  document.getElementById('estimateResult').innerHTML = result;
});
