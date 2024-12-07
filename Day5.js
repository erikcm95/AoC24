//Input and formatting of rule sets
let testRules = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`;

testRules = testRules.split('\n').map((index) => index.split('|')).map((index) => index.map((index1) => Number(index1)))
const rulesObj = testRules.reduce(function(obj,index) {
  if(!obj[index[1]]) {
    obj[index[1]] = [];
  }
  obj[index[1]].push(index[0]);

  return obj
},{})

//Input and formatting of page sets
let testSets = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

testSets = testSets.split('\n').map((index) => index.split(',')).map((index) => index.map((index1) => Number(index1)));



console.log(rulesObj)