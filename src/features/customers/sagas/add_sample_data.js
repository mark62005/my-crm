import { put, select, takeLatest, delay } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import { keys, regions } from "../../../utilities/constants";
import { generateUID } from "../../../utilities/helpers";
import * as actions from "../reducers";

export function* watchAddSampleCustomers() {
    yield takeLatest(actions.addSampleCustomers.toString(), takeAddSampleCustomers);
}

export function* takeAddSampleCustomers() {
    console.log("Starting fetch request to API");

    try {
        const sampleCustomers = [
            {
                id: generateUID(),
                first_name: "Othilie",
                last_name: "Beasant",
                email: "obeasant0@drupal.org",
                mobile: "8873198465",
                region: regions.ASIA.id,
            }, {
                id: generateUID(),
                first_name: "Sibby",
                last_name: "De Cruze",
                email: "sdecruze1@gizmodo.com",
                mobile: "1495712946",
                region: regions.EUROPE.id,
            }, {
                id: generateUID(),
                first_name: "Agata",
                last_name: "Buffey",
                email: "abuffey2@dot.gov",
                mobile: "1887265245",
                region: regions.REST_OF_WORLD.id,
            }, {
                id: generateUID(),
                first_name: "Gretel",
                last_name: "Cagan",
                email: "gcagan3@themeforest.net",
                mobile: "5617543012",
                region: regions.NORTH_AMERICA.id,
            }, {
                id: generateUID(),
                first_name: "Sebastiano",
                last_name: "Wilkison",
                email: "swilkison4@uol.com.br",
                mobile: "4252081373",
                region: regions.ASIA.id,
            }, {
                id: generateUID(),
                first_name: "Malory",
                last_name: "Melrose",
                email: "mmelrose5@tinyurl.com",
                mobile: "4021234227",
                region: regions.EUROPE.id,
            }, {
                id: generateUID(),
                first_name: "Carmelle",
                last_name: "Portress",
                email: "cportress6@wikipedia.org",
                mobile: "6623158935",
                region: regions.NORTH_AMERICA.id,
            }, {
                id: generateUID(),
                first_name: "Damien",
                last_name: "Lowin",
                email: "dlowin7@zdnet.com",
                mobile: "5981225165",
                region: regions.REST_OF_WORLD.id,
            }, {
                id: generateUID(),
                first_name: "Toby",
                last_name: "Gavrieli",
                email: "tgavrieli8@miibeian.gov.cn",
                mobile: "2342633184",
                region: regions.ASIA.id,
            }, {
                id: generateUID(),
                first_name: "Tasha",
                last_name: "Kupec",
                email: "tkupec9@toplist.cz",
                mobile: "9612672333",
                region: regions.EUROPE.id,
            }, {
                id: generateUID(),
                first_name: "Glad",
                last_name: "Sabbatier",
                email: "gsabbatiera@japanpost.jp",
                mobile: "5466095761",
                region: regions.NORTH_AMERICA.id,
            }, {
                id: generateUID(),
                first_name: "Serge",
                last_name: "Bartul",
                email: "sbartulb@addthis.com",
                mobile: "4408760745",
                region: regions.REST_OF_WORLD.id,
            }, {
                id: generateUID(),
                first_name: "Mickie",
                last_name: "Birtonshaw",
                email: "mbirtonshawc@engadget.com",
                mobile: "3399733394",
                region: regions.ASIA.id,
            }, {
                id: generateUID(),
                first_name: "Sherill",
                last_name: "Richardeau",
                email: "srichardeaud@networkadvertising.org",
                mobile: "2059786261",
                region: regions.EUROPE.id,
            }, {
                id: generateUID(),
                first_name: "Shelley",
                last_name: "Fulep",
                email: "sfulepe@washington.edu",
                mobile: "7249193949",
                region: regions.NORTH_AMERICA.id,
            },
        ];

        yield delay(500);

        yield set(keys.CUSTOMERS, sampleCustomers);

        yield put(actions.addSampleCustomersResult(sampleCustomers));
    } catch (error) {
        yield put(actions.addSampleCustomersError(error.toString()));
    }
}
