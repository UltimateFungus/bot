import { solveChallenge, solveChallengeWorkers } from "altcha-lib";

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

const thisServerAddress = "wss://sgs-wctwk-clcg4.frankfurt.moomoo.io";

async function challenge() {
        const rawData = await fetch('https://corsproxy.io/?url=' + "https://api.moomoo.io/verify");
        const data = await rawData.json()
        const token = await solve(data);
        new Bot("hi",token);
}
challenge();
class Bot {
	constructor(name, token) {
        console.log("SENT");
		this.ws = new WebSocket(`${thisServerAddress}/?token=${encodeURIComponent(`alt:${token}`)}`);
        this.ws.onopen = e => console.log("open");
        this.ws.onclose = e => console.log(e);
        this.ws.onerror = e => console.log(e);
	}
}