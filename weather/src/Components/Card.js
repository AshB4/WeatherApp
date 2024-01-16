// src/components/Card.js

import React from 'react';
const determineTimeOfDay = () => {
    const currentHour = new Date().getHours();
      
    // in military time can adjust if needed
    if (currentHour >= 6 && currentHour < 18) {
      return 'day';
    } else {
      return 'night';
    }
  };
  
  const getWeatherIcon = (conditionCode) => {
    const timeOfDay = determineTimeOfDay();
    let iconPath = `../assets/${timeOfDay}/${conditionCode}.png`;

  switch (conditionCode) {
    case 1000:
        iconPath = `../assets/${timeOfDay}/113.png`;
        break;
      case 1003:
        iconPath = `../assets/${timeOfDay}/116.png`;
        break;
      case 1006:
        iconPath = `../assets/${timeOfDay}/119.png`;
        break;
      case 1009:
        iconPath = `../assets/${timeOfDay}/122.png`;
        break;
      case 1030:
        iconPath = `../assets/${timeOfDay}/143.png`;
        break;
      case 1063:
        iconPath = `../assets/${timeOfDay}/176.png`;
        break;
      case 1066:
        iconPath = `../assets/${timeOfDay}/179.png`;
        break;
      case 1069:
        iconPath = `../assets/${timeOfDay}/182.png`;
        break;
      case 1072:
        iconPath = `../assets/${timeOfDay}/185.png`;
        break;
      case 1087:
        iconPath = `../assets/${timeOfDay}/200.png`;
        break;
        case 1114:
            iconPath = `../assets/${timeOfDay}/227.png`;
            break;
          case 1117:
            iconPath = `../assets/${timeOfDay}/230.png`;
            break;
          case 1135:
            iconPath = `../assets/${timeOfDay}/248.png`;
            break;
          case 1147:
            iconPath = `../assets/${timeOfDay}/260.png`;
            break;
          case 1150:
            iconPath = `../assets/${timeOfDay}/263.png`;
            break;
          case 1153:
            iconPath = `../assets/${timeOfDay}/266.png`;
            break;
          case 1168:
            iconPath = `../assets/${timeOfDay}/281.png`;
            break;
          case 1171:
            iconPath = `../assets/${timeOfDay}/284.png`;
            break;
          case 1180:
            iconPath = `../assets/${timeOfDay}/293.png`;
            break;
          case 1183:
            iconPath = `../assets/${timeOfDay}/296.png`;
            break;
          case 1186:
            iconPath = `../assets/${timeOfDay}/299.png`;
            break;
          case 1189:
            iconPath = `../assets/${timeOfDay}/302.png`;
            break;
          case 1192:
            iconPath = `../assets/${timeOfDay}/305.png`;
            break;
          case 1195:
            iconPath = `../assets/${timeOfDay}/308.png`;
            break;
          case 1198:
            iconPath = `../assets/${timeOfDay}/311.png`;
            break;
          case 1201:
            iconPath = `../assets/${timeOfDay}/314.png`;
            break;
          case 1204:
            iconPath = `../assets/${timeOfDay}/317.png`;
            break;
          case 1207:
            iconPath = `../assets/${timeOfDay}/320.png`;
            break;
          case 1210:
            iconPath = `../assets/${timeOfDay}/323.png`;
            break;
          case 1213:
            iconPath = `../assets/${timeOfDay}/326.png`;
            break;
          case 1216:
            iconPath = `../assets/${timeOfDay}/329.png`;
            break;
          case 1219:
            iconPath = `../assets/${timeOfDay}/332.png`;
            break;
          case 1222:
            iconPath = `../assets/${timeOfDay}/335.png`;
            break;
          case 1225:
            iconPath = `../assets/${timeOfDay}/338.png`;
            break;
          case 1237:
            iconPath = `../assets/${timeOfDay}/350.png`;
            break;
          case 1240:
            iconPath = `../assets/${timeOfDay}/353.png`;
            break;
          case 1243:
            iconPath = `../assets/${timeOfDay}/356.png`;
            break;
          case 1246:
            iconPath = `../assets/${timeOfDay}/359.png`;
            break;
          case 1249:
            iconPath = `../assets/${timeOfDay}/362.png`;
            break;
          case 1252:
            iconPath = `../assets/${timeOfDay}/365.png`;
            break;
          case 1255:
            iconPath = `../assets/${timeOfDay}/368.png`;
            break;
          case 1258:
            iconPath = `../assets/${timeOfDay}/371.png`;
            break;
          case 1261:
            iconPath = `../assets/${timeOfDay}/374.png`;
            break;
          case 1264:
            iconPath = `../assets/${timeOfDay}/377.png`;
            break;
          case 1273:
            iconPath = `../assets/${timeOfDay}/386.png`;
            break;
          case 1276:
            iconPath = `../assets/${timeOfDay}/389.png`;
            break;
          case 1279:
            iconPath = `../assets/${timeOfDay}/392.png`;
            break;
          case 1282:
            iconPath = `../assets/${timeOfDay}/395.png`;
            break;
         
    default:
      iconPath = `../assets/${timeOfDay}/116.png`; // A default icon for unknown conditions
  }

  // Return an img tag with the dynamically generated path
  return <img src={require(iconPath)} alt={`Weather Icon ${conditionCode}`} />
};
  
    // Return an img tag with the dynamically generated path
    return <img src={require(iconPath)} alt={`Weather Icon ${conditionCode}`} />


export default Card;
