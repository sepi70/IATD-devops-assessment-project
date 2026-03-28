case 0: {
    let flightId = "";
    let flightIndex = -1;

    do {
        flightId = readlineSync.question(wrapString("Enter the id of the flight to change the date for: "));
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].id.toLowerCase() === flightId.toLowerCase()) {
                flightIndex = i;
                break;
            }
        }

        if (flightIndex < 0) {
            logWrapped(`ERROR: Flight ID ${flightId} not found.`);
        }

    } while (flightIndex < 0);

    logWrapped(`The current departure date for ${flights[flightIndex].id} is ${flights[flightIndex].date}`);

    const date = enterFlightDate();
    flights[flightIndex].date = date;

    logWrapped(`Flight successfully updated!`);
    readlineSync.keyInPause(wrapString("Press q to return to main menu..."), {limit: ["q"], guide: false});
    break;
}