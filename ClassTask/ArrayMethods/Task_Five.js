function time(timings) {
    const classTimings = [];

    timings.filter(timing => {
        if (timing.includes("PM")) {
            classTimings.push(timing);
        }
    });

    return classTimings;
}


module.exports = time;

