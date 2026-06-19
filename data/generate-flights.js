import * as fs from "fs";

const airlines = [
    "biman",
    "us-bangla",
    "novoair",
    "air-astra",
];

const routes = [
    "CXB",
    "CGP",
    "ZYL",
    "JSR",
    "RJH",
];

const flights = [];

let counter = 1;

for (const route of routes) {
    for (let i = 0; i < 8; i++) {
        const airline =
            airlines[i % airlines.length];

        const departureHour = 6 + i;

        flights.push({
            id: `FL-${String(counter).padStart(
                3,
                "0"
            )}`,

            flightNumber: `${airline
                .substring(0, 2)
                .toUpperCase()}${500 + counter}`,

            airlineId: airline,

            originCode: "DAC",

            destinationCode: route,

            departureTime: `2026-07-${String(
                (i % 5) + 1
            ).padStart(
                2,
                "0"
            )}T${String(
                departureHour
            ).padStart(2, "0")}:00:00Z`,

            arrivalTime: `2026-07-${String(
                (i % 5) + 1
            ).padStart(
                2,
                "0"
            )}T${String(
                departureHour + 1
            ).padStart(2, "0")}:15:00Z`,

            duration: 60 + Math.floor(Math.random() * 30),

            stops: Math.random() > 0.8 ? 1 : 0,

            availableSeats:
                5 + Math.floor(Math.random() * 25),

            cabinClass: "economy",

            baggageCabin: "7kg",

            baggageChecked: "20kg",

            price:
                3500 +
                Math.floor(Math.random() * 5000),
        });

        counter++;
    }
}

fs.writeFileSync(
    "./flights.json",
    JSON.stringify(flights, null, 2)
);

console.log(
    `Generated ${flights.length} flights`
);