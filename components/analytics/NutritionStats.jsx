import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const MacronutrientContainer = ({ calories, header, carbPercent, proPercent, fatPercent }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const carbs = Math.round((calories * carbPercent) / 4);
  const protein = Math.round((calories * proPercent) / 4);
  const fats = Math.round((calories * fatPercent) / 9);

  const data = {
    labels: [`${carbPercent.substr(2)}% Carbs`, `${proPercent.substr(2)}% Protein`, `${fatPercent.substr(2)}% Fats`],
    datasets: [
      {
        label: '# of grams',
        data: [carbs, protein, fats],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white border rounded-lg border-borderGray">
      <h2 className="text-xl font-bold">{header}:</h2>
      <p className="pt-2 text-sm">Your daily goal is {calories} calories.</p>
      <div className="my-2">
        <p className="text-sm">Fats: {fats}g</p>
        <p className="text-sm">Protein: {protein}g</p>
        <p className="text-sm">Carbs: {carbs}g</p>
      </div>
      <Pie data={data} />
    </div>
  );
};

const NutritionStats = (props) => {
  console.log("props: ", props);
  const maintenanceCalories = parseInt(props.calories);
  const cuttingCalories = parseInt(props.calories) - 500;
  const bulkingCalories = parseInt(props.calories) + 500;
  return (
    <div className='w-full max-w-4xl px-10 mx-auto'>
      <div>
          <p className="py-2 text-2xl font-bold text-center">Your Stats:</p>
          <div className="flex flex-wrap justify-center">
          <div className="w-full px-2 py-3 md:w-1/3">
            <MacronutrientContainer
              header="Maintenance"
              calories={maintenanceCalories}
              fatPercent="0.30"
              proPercent="0.30"
              carbPercent="0.40"
            />
          </div>
          <div className="w-full px-2 py-3 md:w-1/3">
            <MacronutrientContainer
              header="Cutting"
              calories={cuttingCalories}
              fatPercent="0.30"
              proPercent="0.30"
              carbPercent="0.40"
            />
          </div>
          <div className="w-full px-2 py-3 md:w-1/3">
            <MacronutrientContainer
              header="Bulking"
              calories={bulkingCalories}
              fatPercent="0.30"
              proPercent="0.30"
              carbPercent="0.40"
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default NutritionStats;