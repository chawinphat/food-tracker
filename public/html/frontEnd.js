function createGraph(items) {
    //items is a 2D array with nested array of structure: [food_name, date, calories]

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


