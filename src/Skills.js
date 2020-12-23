import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import "./Skills.css"

function Skills() {
   
    return (
        <div className="skills">
        <div className="skills__heading">
        <h1>Skills</h1>
        </div>
         <div className="skills_chart">
         <HorizontalBar 
               data={{
                labels: ['React.js', 'Node.js', 'MongoDB','Javascript'],
                datasets: [{
                 label: 'rating out of 10',
                 data: [10, 10, 10, 10, 10, 10],
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 borderWidth: 1
                 }]
                 
               }}
                height={400}
                width={600}
               
               options={{
                scales:{
                    xAxes: [{
                        ticks: {
                          beginAtZero: true
                            }
              
                           }]
                        },
                        maintainAspectRatio : false,
                        //responsive: true,
                
               }}
                   
                   
                    
                           
                      
          />
         </div>
          
        </div>
    )
}

export default Skills
