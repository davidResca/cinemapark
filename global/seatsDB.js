// // const seats = [];

// // const generateRow = ({ letter, condition }) => {
// //   const row = [];
// //   const totalSeats = 15;
// //   let seatNumber = 1;

// //   for (let j = 0; j < totalSeats; j++) {
// //     let seatName = "";
// //     if (condition(j)) {
// //       seatName = false;
// //     } else {
// //       seatName = `${letter.toUpperCase()}${seatNumber}`;
// //       seatNumber++;
// //     }
// //     row.push({
// //       seatName: seatName,
// //       selected: false,
// //       available: Boolean(Math.round(Math.random)),
// //     });
// //   }
// //   seats.push(row);
// // };
// // const generateSeats = () => {
// //   const rowsInfo = [
// //     { letter: "a", condition: (j) => false },
// //     { letter: "b", condition: (j) => false },
// //     { letter: "c", condition: (j) => false },
// //     { letter: "d", condition: (j) => (j >= 7 && j <= 9) || j >= 14 },
// //     { letter: "e", condition: (j) => j > 13 },
// //     { letter: "f", condition: (j) => j > 13 },
// //     { letter: "g", condition: (j) => j > 13 },
// //     { letter: "h", condition: (j) => j > 13 },
// //     { letter: "i", condition: (j) => (j >= 1 && j <= 3) || j > 13 },
// //     { letter: "j", condition: (j) => (j >= 1 && j <= 3) || j > 12 },
// //     { letter: "k", condition: (j) => false },
// //     { letter: "l", condition: (j) => false },
// //     { letter: "m", condition: (j) => false },
// //     { letter: "n", condition: (j) => false },
// //     { letter: "o", condition: (j) => j > 2 && j < 14 },
// //   ];

// //   for (let i = 0; i < rowsInfo.length; i++) {
// //     generateRow(rowsInfo[i]);
// //   }
// // };
// // generateSeats();
// // console.log(seats);


// const generateSeats = () => {
//   const seats = [];
//   const totalSeatsPerRow = 15;
  
//   const rowsInfo = [
//     { letter: "a", condition: (j) => false },
//     { letter: "b", condition: (j) => false },
//     { letter: "c", condition: (j) => false },
//     { letter: "d", condition: (j) => (j >= 6 && j <= 8) || j >= 13 },
//     { letter: "e", condition: (j) => j > 12 },
//     { letter: "f", condition: (j) => j > 12 },
//     { letter: "g", condition: (j) => j > 12 },
//     { letter: "h", condition: (j) => j > 12 },
//     { letter: "i", condition: (j) => j <= 2 || j > 12 },
//     { letter: "j", condition: (j) => j <= 2 || j > 11 },
//     { letter: "k", condition: (j) => false },
//     { letter: "l", condition: (j) => false },
//     { letter: "m", condition: (j) => false },
//     { letter: "n", condition: (j) => false },
//     { letter: "o", condition: (j) => j > 1 && j < 13 },
//   ];
  
//   for (let i = 0; i < rowsInfo.length; i++) {
//     const { letter, condition } = rowsInfo[i];
//     const row = [];
    
//     for (let j = 0; j < totalSeatsPerRow; j++) {
//       let seatName = "";
//       if (condition(j)) {
//         seatName = false;
//       } else {
//         seatName = `${letter.toUpperCase()}${j + 1}`;
//       }
//       const available = Math.random() < 0.5; // Randomizar disponibilidad
//       row.push({ seatName, available });
//     }
//     seats.push(row);
//   }
  
//   console.log(JSON.stringify(seats, "", null));
//   return seats;
// };

