import { solveChallenge, solveChallengeWorkers } from "altcha-lib";
import WebSocket from "ws";
async function solve(data) {
    const result = await solveChallengeWorkers(
        "./node_modules/altcha-lib/dist/worker.js",
        8,
        data.challenge,
        data.salt,
        data.algorithm,
        data.maxnumber
    );
    const tokenObj = JSON.stringify({
      algorithm: data.algorithm,
      challenge: data.challenge,
      number: result.number,
      salt: data.salt,
      signature: data.signature,
      took: result.took
    });
    const token = btoa(tokenObj);
    return token;
}

const thisServerAddress = "wss://sgs-wctwk-6wqgb.frankfurt.moomoo.io";

async function challenge() {
        const rawData = await fetch('https://corsproxy.io/?url=' + "https://api.moomoo.io/verify"); // works
        const data = await rawData.json();
        console.log(data);
        const token = await solve(data);
        new Bot("hi",token);
}
challenge();
class Bot {
	constructor(name, token) {
		this.ws = new WebSocket(`${thisServerAddress}/?token=${encodeURIComponent(`alt:${token}`)}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            }
        });
        this.ws.onopen = e => console.log("open");
        this.ws.onclose = e => console.log(e);
        this.ws.onerror = e => console.log(e._closeCode);
	}
}