/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from '../exercises/e17'

export function getGreatestDiscoveryYear(data) {
  let countByYears = data.asteroids.map(function(asteroid, index, array) {
      let countOfCurrentYear = array.filter(function(currentYear) {
          return currentYear.discoveryYear === asteroid.discoveryYear;
      });
      
      return { year: asteroid.discoveryYear, count: countOfCurrentYear.length };
  });
  
  return maxBy(countByYears, (yearAndCount) => yearAndCount.count).year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
