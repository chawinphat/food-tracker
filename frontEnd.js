function createGraph(items) {
    let items = [
        ["cheese",'MON', 1200],
        ["APPLE", 'TUE', 2300],
        ["dwad", 'FRI', 1000],
        ["dwad", 'SUN', 100],
        ["dwad", 'WED', 3800], 
        ["dwad", 'MON', 1000],
        ["dwad", 'THU', 100],
        ["dwad", 'SAT', 3800] 
    ];

    let calories = {}
    calories['SUN'] = 0
    calories['MON'] = 0
    calories['TUE'] = 0
    calories['WED'] = 0
    calories['THU'] = 0
    calories['FRI'] = 0
    calories['SAT'] = 0

    let foods = {}
    foods['SUN'] = []
    foods['MON'] = []
    foods['TUE'] = []
    foods['WED'] = []
    foods['THU'] = []
    foods['FRI'] = []
    foods['SAT'] = []

    //#2d array each inside array is [foodnaem, 'MON', calorie]
    for (i in items) {
        let arr = items[i]
        foods[arr[1]].push(arr[0])
        calories[arr[1]] += arr[2]
    }
    
    for (let key in calories) {
        const percentCal = (calories[key]/4000) * 100
        const day = key
        let bar = document.getElementById(day)
        console.log(key, percentCal)
        bar.style = "height: " + String(percentCal) + "%"
        let num = bar.getElementsByClassName("percent")
        num.innerHTML = calories[day]

        let goal = 2000 //goal setting feature
        if (calories[key] > goal) {
            bar.className = "bar alert"
        } else {
            bar.className = "bar success"
        }
    }
  }


let items = [
    ["cheese",'MON', 1200],
    ["APPLE", 'TUE', 2300],
    ["dwad", 'WED', 1000], 
];
