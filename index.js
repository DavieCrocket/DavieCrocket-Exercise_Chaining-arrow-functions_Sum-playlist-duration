/* Exercise:

Below is a list of videos. By chaining a series of arrow functions, sums the total seconds of 
only the videos that include  'Code' as part of the title. 
*/

const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

function stripTime(playList) {
  return playList
    .filter((song) => song.title.includes('Code'))
    .map((length) => length.dur.split(':'));
} 

const keyWord = 'code';
const strippedTime = stripTime(playList);
let hourSum = 0;
let minSum = 0;

for(i = 0; i < 4; i++) {
  hourSum += (parseInt(strippedTime[i][0]) * 60);
  minSum += (parseInt(strippedTime[i][1]));
}
console.log(hourSum + minSum); 