// Your Mission
// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:
// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.
// For example, if you had this input...
//   [330, 723, 730, 825]
// ...then you should return the following:
// [
//   'Good: 50.00%',
//   'Elite: 25.00%',
//   'Poor: 25.00%'
// ]
// [execution time limit] 4 seconds (js)
// [input] array.integer scores
// An array of integers in the range [300, 850].
// [output] array.string
// An array of strings formatted like LevelName: XX.XX%.
// function codingScoreReportPercent(scores) {
//   //  return string
// }
// complete in 1 hour
let scores = [800,700,600]

function codingScoreReportPercent(scores) {
  let score1 =''
  let score2 =''
  let score3 =''
  let score4 =''
  let score5 =''
  const statsArr = []
  let percentage = 0
  let tally1 = 0
  let tally2 = 0
  let tally3 = 0
  let tally4 = 0
  let tally5 = 0
  for (let i = 0; i < scores.length; i++){

     //when a particular score is detected the tally increases for that score and is divided by the number of users

    if( scores[i] < 300 ){
      scores.splice(i,1)
      console.log(scores)
    }


    if (scores[i] < 600 && scores[i] > 299){
      // Poor: 300-599
      score1 = 'Poor'
      tally1 += 1
      percentage = ((tally1/scores.length)*100).toFixed(2);
      
    }else if (scores[i] > 599 && scores[i] < 700){
      // Fair: 600-699
      score2 = 'Fair'
      tally2 += 1
      percentage = ((tally2/scores.length)*100).toFixed(2);
      
    }else if (scores[i] > 699 && scores[i] < 750){
      // Good: 700-749
      score3 = 'Good'
      tally3 += 1
      percentage = ((tally3/scores.length)*100).toFixed(2);
      
    }else if (scores[i] > 749 && scores[i] < 800 ){
      // Excellent: 750-799
      score4 = 'Excellent'
      tally4 += 1
      percentage = ((tally4/scores.length)*100).toFixed(2);
      
    }else if ( scores[i] > 799){
    // Elite: 800+
      score5 = 'Elite'
     
      tally5 += 1
      percentage = ((tally5/scores.length)*100).toFixed(2);
      
    }
  
  }
  if(score1)
    statsArr.push(`${score1} : ${percentage}%`)

  if(score2)
    statsArr.push(`${score2} : ${percentage}%`)
  
  if(score3)
    statsArr.push(`${score3} : ${percentage}%`)
  
  if(score4)
    statsArr.push(`${score4} : ${percentage}%`)
  
  if(score5)
    statsArr.push(`${score5} : ${percentage}%`)
  
  

  return statsArr

  
  



}


console.log(codingScoreReportPercent(scores))