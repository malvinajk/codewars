// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

//     Note: the input will always be valid.

// For example:

// 5, 10, 2  -- > 17

function goals2(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let arr = [laLigaGoals, copaDelReyGoals, championsLeagueGoals]
    return arr.reduce((x, y) => x + y)
}

